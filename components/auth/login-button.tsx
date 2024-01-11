"use client";

import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const Clicked = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>modal to be build next time</span>;
  }

  return (
    <span onClick={Clicked} className="cursor-pointer">
      {children}
    </span>
  );
};
