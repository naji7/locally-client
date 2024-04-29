import type { Metadata } from "next";

import "./globals.css";
import { MembershipProvider } from "@/providers/membershipProvider";
import NotistackProvider from "@/providers/notistackProvider";

export const metadata: Metadata = {
  title: "Winlads",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MembershipProvider>
          <NotistackProvider> {children}</NotistackProvider>
        </MembershipProvider>
      </body>
    </html>
  );
}
