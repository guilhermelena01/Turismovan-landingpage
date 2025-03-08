import { FontOswald } from "@/src/utils/util";
import CustomButton from "../Standard/Button";

export default function BannerMenor() {
    return (
        <section className={`${FontOswald.className} text-white bg-grafite py-14 gap-14 items-center flex justify-center`}>
            <span className="flex flex-col gap-4">
                <h2 className="text-4xl">RESERVE SUA VIAGEM SEM SAIR DE CASA</h2>
                <p className="text-lg font-extralight">Usando nosso website, você pode reservar sua viagem com apenas alguns cliques.</p>
            </span>
            <CustomButton
                text="RESERVE AGORA"
                hasBorder
                color="#fff"
                backgroundColor=""
                classname="px-14 py-4 h-fit hover:bg-laranja_Forte transition-all duration-300 hover:border-laranja_Forte"
            />
        </section>
    )
}