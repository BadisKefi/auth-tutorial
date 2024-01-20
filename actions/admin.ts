"use server";
import { getCurrentRole } from "@/lib/current-role";
import { UserRole } from "@prisma/client";

export const AdminOnlyServerAction = async () => {
  const role = await getCurrentRole();
  if (role === UserRole.ADMIN) {
    return { success: "Allowed!" };
  }
  return { error: "Forbidden!" };
};
