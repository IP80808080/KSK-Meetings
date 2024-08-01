import { SignUp } from "@clerk/nextjs";
import React from "react";

type Props = {};

function SignUpPage({}: Props) {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <SignUp />
    </main>
  );
}

export default SignUpPage;
