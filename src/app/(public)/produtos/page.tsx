export default function Produtos() {
    return <>
        <main className="pt-4 flex flex-col justify-center items-center">
            <title>Produtos</title>
            <h1 className="text-4xl font-bold pb-4">produtos</h1>
            <section className="flex flex-wrap px-80 justify-center items-center gap-6">
                <button>
                    <div className="border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">Design</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Dê uma nova cara a sua marca</h1>
                            </div>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">Design</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Dê uma nova cara a sua marca</h1>
                            </div>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">Design</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Dê uma nova cara a sua marca</h1>
                            </div>
                        </div>
                    </div>
                </button>
            </section>
        </main>
    </>;
}