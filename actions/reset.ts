"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { sendResetPasswordEmail } from "@/lib/mail";
import { generateResetPasswordToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";
import { z } from "zod";

export const Reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid email!" };

  const { email } = validatedFields.data;
  console.log(email);
  const existingUser = await getUserByEmail(email);
  if (!existingUser) return { error: "Email not found!" };

  const resetPasswordToken = await generateResetPasswordToken(email);
  sendResetPasswordEmail(resetPasswordToken.email, resetPasswordToken.token);

  return { success: "Reset email send successfully!" };
};
