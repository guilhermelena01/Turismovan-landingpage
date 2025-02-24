import { MessageCircleQuestionIcon } from "lucide-react";
import Image from "next/image";

type CardsData = {
    imageSrc: string
    destino: string;
    valor: string;
}

interface CardsDestinosProps {
    data: Array<CardsData>
}

export default function CardsDestinos({ data }: CardsDestinosProps) {
    return (
        <>
            <div className="w-full grid grid-cols-3 gap-12 text-grafite">
                {data.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                        <Image src={item.imageSrc} className="rounded-xl w-full" width={"448"} height={"248"} alt={`${item.destino}`} />
                        <span className="w-full flex justify-between relative">
                            <p className="text-2xl">{item.destino}</p>
                            <p className="text-2xl text-laranja_Forte mr-6">{item.valor}</p>
                            <span className="absolute right-0"><MessageCircleQuestionIcon width={18} color="#ec7f24" /></span>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}