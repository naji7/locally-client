import type { Metadata } from "next";

import "./globals.css";
import { MembershipProvider } from "@/providers/membershipProvider";
import NotistackProvider from "@/providers/notistackProvider";
import { UserProvider } from "@/providers/UserProvider";

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
          <UserProvider>
            <NotistackProvider> {children}</NotistackProvider>
          </UserProvider>
        </MembershipProvider>
      </body>
    </html>
  );
}
