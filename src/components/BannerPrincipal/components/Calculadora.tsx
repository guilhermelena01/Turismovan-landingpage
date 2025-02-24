import CustomButton from "../../Standard/Button";

export default function Calculadora() {
    return (
        <>
            <section className="bg-[#f5f5f5] flex flex-col text-grafite rounded-md px-8 py-10 gap-12">
                <h2 className="text-2xl">SIMULE SUA VIAGEM</h2>
                <div className="flex flex-col gap-4">
                    <span className="flex flex-col gap-2">
                        <label htmlFor="input" className="font-extralight text-sm">Saindo de:</label>
                        <input type="text" className="rounded-3xl px-6 py-4" placeholder="Cidade de origem" />
                    </span>
                    <span className="flex flex-col gap-2">
                        <label htmlFor="input" className="font-extralight text-sm">Para:</label>
                        <input type="text" className="rounded-3xl px-6 py-4" placeholder="Cidade de destino" />
                    </span>
                    <span className="flex gap-4 w-full">
                        <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="input" className="font-extralight text-sm">Para:</label>
                            <input type="text" className="rounded-3xl px-6 py-4 w-full" placeholder="Cidade de destino" />
                        </span>
                        <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="input" className="font-extralight text-sm">Para:</label>
                            <input type="text" className="rounded-3xl px-6 py-4 w-full" placeholder="Cidade de destino" />
                        </span>
                    </span>
                    <span className="flex gap-4 w-full">
                        <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="input" className="font-extralight text-sm">Para:</label>
                            <input type="text" className="rounded-3xl px-6 py-4 w-full" placeholder="Cidade de destino" />
                        </span>
                        <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="input" className="font-extralight text-sm">Para:</label>
                            <input type="text" className="rounded-3xl px-6 py-4 w-full" placeholder="Cidade de destino" />
                        </span>
                    </span>
                </div>
                <CustomButton
                    text="SIMULAR"
                    color="#fff"
                    backgroundColor=""
                    classname="py-4 justify-center hover:bg-[#082e63] bg-laranja_Forte transition-all duration-300"
                />
            </section>
        </>
    )
}