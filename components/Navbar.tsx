import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 text-white">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
          priority
        />
        <p className="text-[26px] font-extrabold max-sm:hidden">MEET</p>
      </Link>
      <div className="flex-between gap-5 ">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
