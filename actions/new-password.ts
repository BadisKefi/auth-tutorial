"use server";

import { getUserByEmail } from "@/data/user";
import { getResetPasswordTokenByToken } from "@/data/password-reset-token";
import { db } from "@/lib/db";
import { NewPasswordSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token: string
) => {
  if (!token) {
    return { error: "Missing token!" };
  }
  const validatedFields = NewPasswordSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid password!" };

  const { password, confirmPassword } = validatedFields.data;

  if (password !== confirmPassword) {
    return { error: "Passwords don't match!" };
  }

  const existingToken = await getResetPasswordTokenByToken(token);
  if (!existingToken) return { error: "Invalid token!" };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });
  await db.resetPasswordToken.delete({
    where: { id: existingToken.id },
  });
  return { success: "Password updated successfully!" };
};
