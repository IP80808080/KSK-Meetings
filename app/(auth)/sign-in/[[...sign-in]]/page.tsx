import { SignIn } from "@clerk/nextjs";
import React from "react";

type Props = {};

function SignInPage({}: Props) {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <SignIn />
    </main>
  );
}

export default SignInPage;
