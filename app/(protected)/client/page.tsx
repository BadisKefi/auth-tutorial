"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();
  return (
    <div className="flex flex-center flex-col items-center justify-center">
      <UserInfo label="Client component" user={user}></UserInfo>
    </div>
  );
};

export default ClientPage;
