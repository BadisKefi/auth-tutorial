"use server";

import { getUserById } from "@/data/user";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { z } from "zod";

export const SettingsAction = async (
  values: z.infer<typeof SettingsSchema>
) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "Unautorized" };

  // to prevent leftovers from the session
  const dbUser = await getUserById(currentUser.id);

  if (!dbUser) return { error: "Unautorized" };

  await db.user.update({ where: { id: dbUser.id }, data: { ...values } });

  return { success: "Settings updated!" };
};
