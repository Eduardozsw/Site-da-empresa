
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

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <nav className="flex flex-wrap items-center justify-around mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse"> {/* tag a ta servindo pra "alinhar" o texto*/}
                    <Image alt="Imagem da logo" width={32} height={32} src={Logo} />
                    <span className="self-center text-1xl font-semibold whitespace-nowrap">OptimusTech</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Link href='/' className="text-1xl font-semibold">Home</Link>
                    <Link href='/produtos' className="text-1xl font-semibold">Produtos</Link>
                    <Link href='/tecnologias2' className="text-1xl font-semibold">Tecnologias</Link>
                    <Link href='/sobre' className="text-1xl font-semibold">Sobre nós</Link>
                </div>
                <div className="space-x-3">
                    <Link href='/auth/login' className="text-1xl font-semibold">Entrar</Link>
                    <Link href='/register' className="buto text-1xl font-semibold p-3 rounded-lg text-white">Cadastrar</Link>
                </div>
            </nav>
            {children}
        </>
    );
}