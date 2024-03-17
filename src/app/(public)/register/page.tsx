export default function LoginPage() {
    return <>
        <section className="flex flex-col items-center">
            <form>
                <div className="flex flex-col text-center">
                    <label className="font-bold">Email:</label>
                    <input className="border-2 w-[275px] text-center rounded-lg" />
                </div>
                <div className="flex flex-col text-center">
                    <label className="font-bold">Confime seu Email:</label>
                    <input className="border-2 w-[275px] text-center rounded-lg" />
                </div>
                <div className="flex flex-col text-center">
                    <label className="font-bold">Senha:</label>
                    <input className="border-2 w-[275px] text-center rounded-lg" />
                </div>
                <div className="flex flex-col text-center">
                    <label className="font-bold">Confirme sua Senha:</label>
                    <input className="border-2 w-[275px] text-center rounded-lg" />
                </div>
                <div className="items-center">
                    <button type="submit" className="font-bold border-2 p-1 mt-2 rounded-lg">Cadastrar</button>
                </div>
            </form>
        </section>
    </>
}