import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Hero from "@/components/Hero";
import {NextUIProvider} from "@nextui-org/react";
import Footer from "@/components/Footer";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAIGTH",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-x-hidden`}>
        {/* <NextUIProvider> */}
          <Hero />
          {children}
          <Footer />
        {/* </NextUIProvider> */}
      </body>
    </html>
  );
}
