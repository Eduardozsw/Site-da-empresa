'use client';

import {useRouter} from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    return <>
        <section className="flex flex-col items-center">
        <form
             onSubmit={() => {
                router.push('inscricoes');
                }}>
                    
                <div className="flex flex-col text-center">
                    <label className="font-bold">Email:</label>
                    <input className="border-2 w-[275px] text-center rounded-lg" />
                </div>
                <div className="flex flex-col text-center">
                    <label className="font-bold">Senha:</label>
                    <input className="border-2 w-[275px] text-center rounded-lg" />
                </div>
                <div className="flex flex-col items-center">
                    <button type="submit" className="font-bold border-2 mt-2 p-1 rounded-lg">Entrar</button>
                </div>
            </form>
        </section>
    </>
}