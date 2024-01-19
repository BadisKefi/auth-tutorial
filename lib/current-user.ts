import { auth } from "@/auth";
import { ExtendedUser } from "@/next-auth";

export const getCurrentUser = async () => {
  const session = await auth();
  return session?.user as ExtendedUser;
};
