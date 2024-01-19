"use client";
import { logout } from "@/actions/logout";
//import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
// import /*useSession*/ /*, signOut*/ "next-auth/react";

const SettingsPage = /*async*/ () => {
  //const session = await auth();
  //const session = useSession();
  const user = useCurrentUser();
  const onClick = () => {
    /*signOut();*/
    logout();
  };
  return (
    <div className="bg-white rounded-xl p-10">
      {JSON.stringify(user)}
      {/*JSON.stringify(session)*/}

      <Button onClick={onClick}>Sign out</Button>
      {/* <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form> */}
    </div>
  );
};

export default SettingsPage;
