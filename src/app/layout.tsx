import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Site da empresa",
  description: "Site para aprendizado e testar conhecimentos em next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
        </body>
    </html>
  );
}
