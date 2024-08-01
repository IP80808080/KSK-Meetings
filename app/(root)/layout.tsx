import StreamVideoProvider from "@/providers/streamClientProvider";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

type Props = {};

export const metadata: Metadata = {
  title: "MY Meeting",
  description: "Connect with Peoples",
  icons: {
    icon: "/icons/logo.svg",
  },
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}

export default RootLayout;
