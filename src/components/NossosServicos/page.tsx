import { FontOswald } from "@/src/utils/util";
import Cards from "./components/Cards";
import { Binoculars, Bus, Luggage, PartyPopper } from "lucide-react";

export default function NossosServicos() {

    const cardData = [
        {
            "icone": <Bus color="#ec7f24" width={34} height={30} />,
            "titulo": "Translados e transfers",
            "paragrafo": "Transporte de passageiros entre aeroportos, hotéis, rodoviárias ou eventos. Ideal para quem busca praticidade e conforto na chegada e saída de viagens."
        },
        {
            "icone": <Binoculars color="#ec7f24" width={34} height={30} />,
            "titulo": "Passeios e Excursões",
            "paragrafo": "Explore destinos incríveis com roteiros organizados, visitando pontos turísticos famosos com segurança e praticidade em grupos."
        },
        {
            "icone": <PartyPopper color="#ec7f24" width={34} height={30} />,
            "titulo": "Eventos e Festas",
            "paragrafo": "Transporte para casamentos, formaturas, congressos ou feiras, garantindo que grupos cheguem com pontualidade e segurança."
        },
        {
            "icone": <Luggage color="#ec7f24" width={34} height={30} />,
            "titulo": "Viagens Corporativas e Fretamento",
            "paragrafo": "Locação de vans para empresas que necessitam de transporte para colaboradores em eventos, reuniões ou viagens de negócios."
        },
    ]

    return (
        <>
            <section className={`flex flex-col items-center gap-24 bg-[#f5f5f5] text-grafite py-12 ${FontOswald.className}`}>
                <h2 className="text-4xl">NOSSOS SERVIÇOS</h2>
                <Cards data={cardData} />
            </section>
        </>
    )
}