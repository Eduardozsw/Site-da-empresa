import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../global.css";
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
      <nav className="flex flex-wrap items-center justify-around mx-auto p-4 ">
        <div className="flex items-center space-x-3 rtl:space-x-reverse"> {/* tag a ta servindo pra "alinhar" o texto*/}
          <Image alt="Imagem da logo" width={32} height={32} src={Logo} />
          <span className="self-center text-1xl font-semibold whitespace-nowrap">OptimusTech</span>
        </div>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href='/'className="text-1xl font-semibold">Home</Link>
          <Link href='/' className="text-1xl font-semibold">Inscricoes</Link>
          <Link href='/' className="text-1xl font-semibold">Contratos</Link>
          <Link href='/' className="text-1xl font-semibold">Pagamentos</Link>
          <Link href='/' className="text-1xl font-semibold">configurações</Link>
        </div>
        <div className="space-x-3">
          <Link href='/login' className="buto p-3 rounded-lg text-1xl font-semibold text-white">Sair</Link>
        </div>
      </nav>
        {children}
        </body>
    </html>
  );
}
