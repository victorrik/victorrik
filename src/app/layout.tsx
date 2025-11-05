import "@vr/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@vr/trpc/react";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Victorrik",
  description: "Victorrik uwu",
  openGraph: {
    images: [
      {
        url: "/images/ducksWorking.png",
      },
    ],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Analytics debug />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
