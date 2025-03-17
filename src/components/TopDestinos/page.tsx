import { FontOswald } from "@/src/utils/util";
import CustomButton from "../Standard/Button";
import CardsDestinos from "./components/CardsDestinos";

export default function TopDestinos() {
    const cardData = [
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_3_b3c7kv.png",
            "destino": "Foz do Iguaçu",
            "valor": "à partir de R$500,00"
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_l4furm.png",
            "destino": "Bal. Camboriú",
            "valor": "à partir de R$5.000,00"
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_1_uxmwac.png",
            "destino": "Beto Carrero - Penha,SC",
            "valor": "à partir de R$8.000,00"
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_2_ciucsw.png",
            "destino": "Gramado",
            "valor": "à partir de R$ 4.000,00"
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_3_w8vqua.png",
            "destino": "Mendoza,ARG",
            "valor": "à partir de R$15.000,00"
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_4_bnqfal.png",
            "destino": "Atacama,CHI",
            "valor": "à partir de R$18.000,00"
        },
    ]
    return(
        <>
            <section className={`w-full flex flex-col px-20 py-48 gap-24 ${FontOswald.className}`}>
                <div className="justify-between flex items-center">
                    <div className="flex relative items-center">
                        <h2 className="text-4xl absolute">TOP DESTINOS</h2>
                        <p className="text-9xl opacity-5 font-extrabold">TOP DESTINOS</p>
                    </div>
                    <CustomButton
                        text="RESERVE AGORA"
                        backgroundColor=""
                        color="#fff"
                        classname="bg-laranja_Forte h-fit py-4 px-12 hover:bg-[#082e63] transition-all duration-300"
                    />
                </div>
                <CardsDestinos
                    data={cardData}
                    homepage
                />
            </section>
        </>
    )
}