import { useState } from "react";
import CustomButton from "../../Standard/Button";
import { Minus, Plus } from "lucide-react";

export default function Calculadora() {
    const [adultsCount, setAdultsCount] = useState(0)

    function handlePeoplesQuantity(peopleType: string) {
        const maxPeopleQuantity = 24;
        const minPeopleQUantity = 0;

        if (peopleType == "adult") {
            setAdultsCount()
        }
    }

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
                            <label htmlFor="input" className="font-extralight text-sm">Saída:</label>
                            <input type="date" className="rounded-3xl px-6 py-4 w-full" placeholder="Cidade de destino" />
                        </span>
                        <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="input" className="font-extralight text-sm">Volta:</label>
                            <input type="date" className="rounded-3xl px-6 py-4 w-full" placeholder="Cidade de destino" />
                        </span>
                    </span>
                    <span className="flex gap-4 w-full">
                        <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="input" className="font-extralight text-sm">Adultos:</label>
                            <span className="flex gap-1 justify-center bg-white rounded-3xl px-4">
                                <button onClick={() => setAdultsCount(prevState => prevState - 1)}><Minus /></button>
                                <input
                                    maxLength={12}
                                    value={adultsCount}
                                    onChange={(e) => setAdultsCount(e.target.value)}
                                    type="text"
                                    className="py-4 w-full text-center"
                                    placeholder="Quantidade de adultos"
                                />
                                <button onClick={() => setAdultsCount(prevState => prevState + 1)}><Plus /></button>
                            </span>
                        </span>
                        <span className="flex flex-col gap-2 w-full">
                            <label htmlFor="input" className="font-extralight text-sm">Crianças:</label>
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