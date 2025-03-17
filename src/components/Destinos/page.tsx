import { FontOswald } from "@/src/utils/util";
import CardsDestinos from "../TopDestinos/components/CardsDestinos";

export default function Destinos() {
    const cardData = [
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_3_b3c7kv.png",
            "destino": "Foz do Iguaçu, PR",
            "valor": "à partir de R$500,00",
            "carousel": ["https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741733135/foz_lljxp6.jpg", "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741733133/foz5_h8j7io.jpg", "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741733134/foz3_ycedjx.jpg", "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741733134/foz4_xvhgl4.jpg"]
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741717797/bonito-ms_swxnnq.jpg",
            "destino": "Bonito, MS",
            "valor": "à partir de R$5.000,00",
            "carousel": []
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_1_uxmwac.png",
            "destino": "Beto Carrero - Penha,SC",
            "valor": "à partir de R$8.000,00",
            "carousel": []
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_2_ciucsw.png",
            "destino": "Gramado, RS",
            "valor": "à partir de R$ 4.000,00",
            "carousel": []
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741717797/porto-de-galinhas-saida-curitiba-maragogi-alagoas-saida-curitiba-deniel-rocha-aventura-1_srovq1.jpg",
            "destino": "Porto de galinhas, PE",
            "valor": "à partir de R$15.000,00",
            "carousel": []
        },
        {
            "imageSrc": "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740280492/image_4_bnqfal.png",
            "destino": "Atacama, CHI",
            "valor": "à partir de R$18.000,00",
            "carousel": []
        },
    ]

    return (
        <section className={`py-48 px-20 gap-24 flex flex-col items-center ${FontOswald.className}`}>
            <h2 className="text-4xl">DESTINOS</h2>
            <CardsDestinos data={cardData} />
        </section>
    )
}
