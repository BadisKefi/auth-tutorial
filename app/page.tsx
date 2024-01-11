import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800 flex flex-col justify-center items-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-white font-semibold text-6xl drop-shadow-md",
            font.className
          )}
        >
          😃 Auth
        </h1>
        <p className="text-white text-lg ">
          A simple authentification service service
        </p>
        <div>😂😢😊👌😍😃🙁😎👉👉🤔👍🔥👌</div>
        <div>
          <LoginButton>
            <Button size={"lg"} variant={"secondary"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
