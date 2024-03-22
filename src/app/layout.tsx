import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { AuthProvider } from "./providers/auth-providers";

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
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>

          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
