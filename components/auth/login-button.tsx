"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { Button } from "../ui/button";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const [waiting, setWaiting] = useState(false);
  const router = useRouter();
  const Clicked = () => {
    setWaiting(true);
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>modal to be build next time</span>;
  }

  return (
    <span onClick={Clicked} className="cursor-pointer">
      {!waiting && children}
      {waiting && (
        <Button size={"lg"} variant={"secondary"}>
          <BeatLoader />
        </Button>
      )}
    </span>
  );
};
