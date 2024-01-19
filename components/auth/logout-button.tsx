"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Button } from "../ui/button";
import { logout } from "@/actions/logout";
import { Avatar } from "@radix-ui/react-avatar";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const [waiting, setWaiting] = useState(false);
  const router = useRouter();
  const Clicked = () => {
    setWaiting(true);
    logout();
  };

  return (
    <span onClick={Clicked} className="cursor-pointer">
      {!waiting && children}
      {waiting && (
        <Avatar>
          <BeatLoader />
        </Avatar>
      )}
    </span>
  );
};
