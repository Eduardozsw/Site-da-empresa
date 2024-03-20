export default function Produtos() {
    return <>
        <main className="pt-4 flex flex-col justify-center items-center">
            <title>Produtos</title>
            <h1 className="text-4xl font-bold pb-6">produtos</h1>
            <section className="flex flex-wrap text-center gap-6">
                <button>
                    <div className="box border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">Design</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Dê uma nova cara a sua marca</h1>
                            </div>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="box border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">Front-end</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Deixe que um dos nossos profissionais<br/> te ajude a fazer o visual do seu site</h1>
                            </div>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="box border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">Back-end</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Torne funcional a sua landing page<br/> com sistemas de contas e perfis</h1>
                            </div>
                        </div>
                    </div>
                </button>
            </section>
            <section className="flex flex-wrap gap-6 pt-6">
                <button>
                    <div className="box border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">FullStack</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Crie um site para seu negócio e aumente sua visibilidade</h1>
                            </div>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="box border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">App Nativo</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Crie um aplicativo para seu negócio em um único sistema de celular</h1>
                            </div>
                        </div>
                    </div>
                </button>
                <button>
                    <div className="box border-2 rounded-lg">
                        <div className="flex flex-col justify-center items-center p-10">
                            <h1 className="font-bold text-2xl">App</h1>
                            <div className="flex flex-wrap pt-5">
                                <h1 className="font-semibold">Crie um aplicativo para seu negócio para que qualquer um veja sua marca</h1>
                            </div>
                        </div>
                    </div>
                </button>
            </section>
        </main>
    </>;
}