import { UserInfo } from "@/components/user-info";
import { getCurrentUser } from "@/lib/current-user";

const ServerPage = async () => {
  const user = await getCurrentUser();
  return (
    <div className="flex flex-center flex-col items-center justify-center">
      <UserInfo label="Server component" user={user}></UserInfo>
    </div>
  );
};

export default ServerPage;
