import { ExtendedUser } from "@/next-auth";
import { useSession } from "next-auth/react";

export const useCurrentUser = (): ExtendedUser => {
  const session = useSession();
  return session.data?.user as ExtendedUser;
};
