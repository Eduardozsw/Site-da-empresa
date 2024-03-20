export default function Tecnologias() {
    return <>
        <main className="flex flex-col justify-center items-center">
            <h1 className=" text-black text-4xl font-bold pb-4">Tecnologias</h1>
            <section className="flex flex-wrap px-12">
                <div className="border-2 rounded-lg flex flex-col justify-center items-center py-4 px-12 mx-12">
                    <h1 className="font-bold text-2xl pt-4">Front-end</h1>
                    <div className="flex flex-col text-center pt-4 pb-4">
                        <p className="tec">React</p>
                        <p className="tec">HTML5</p>
                        <p className="tec">Javascript</p>
                        <p className="tec">Next</p>
                    </div>
                </div>
                <div className="border-2 rounded-lg flex flex-col justify-center items-center py-4 px-12 mx-12">
                    <h1 className="font-bold text-2xl pt-4">Back-end</h1>
                    <div className="flex flex-col text-center pt-4 pb-4">
                        <p className="tec">Java</p>
                        <p className="tec">PHP</p>
                        <p className="tec">Python</p>
                        <p className="tec">Node.js</p>
                    </div>
                </div>
                <div className="border-2 rounded-lg flex flex-col justify-center items-center py-4 px-12 mx-12">
                    <h1 className="font-bold text-2xl pt-4">UX-Design</h1>
                    <div className="flex flex-col text-center pt-4 pb-4">
                        <p className="tec">Figma</p>
                        <p className="tec">Adobe XD</p>
                        <p className="tec">Sketch</p>
                        <p className="tec">InVision</p>
                    </div>
                </div>
            </section>
        </main>
    </>
}