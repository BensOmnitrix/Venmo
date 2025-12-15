"use client";

import { Card } from "@repo/ui/Card";
import { InputBox } from "@repo/ui/InputBox";
import { Logo } from "@repo/ui/Logo";
import { SubHeading } from "@repo/ui/SubHeading";
import { Button } from "@repo/ui/Button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card>
        <Logo className={"h-30"} />
        <SubHeading label="Log in" />
        <InputBox
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label={"Enter email (example@gmail.com)"}
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label={"Enter password"}
        />
        <Button
          onClick={async () => {
            const res = await signIn("credentials",{
              email: email,
              password: password,
              redirect: false
            });
            if(res?.ok){
              router.push("/")
            }
          }}
          imageURL="any"
          label="Sign In with Credentials"
          hoverTextColor="hover:text-white"
          textColor="text-white"
          borderColor="border-blue-500"
          bgColor="bg-blue-500"
          hoverBgColor="hover:bg-blue-700"
        />
        <Button
          onClick={() => signIn("google")}
          imageURL="../google-icon.webp"
          label="Sign In with Google"
          hoverTextColor="hover:text-white"
          textColor="text-blue-500"
          borderColor="border-blue-500"
          bgColor="border-white-0"
          hoverBgColor="hover:bg-blue-700"
        />
        <Button
          onClick={() => signIn("github")}
          imageURL="../github-icon.webp"
          label="Sign In with Github"
          hoverTextColor="hover:text-white"
          textColor="text-blue-500"
          borderColor="border-blue-500"
          bgColor="border-white-0"
          hoverBgColor="hover:bg-blue-700"
        />
        <div className="h-20"></div>
      </Card>
    </div>
  );
}
