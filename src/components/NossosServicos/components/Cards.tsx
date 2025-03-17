import { FontOswald } from "@/src/utils/util";

type CardsData = {
    icone: string
    titulo: string;
    paragrafo: string;
}

interface CardsProps {
    data: Array<CardsData>
    homePage?: boolean;
}

export default function Cards({ data, homePage }: CardsProps) {

    return (
        <>
            <div className={`flex gap-10 w-full px-20 ${FontOswald.className}`}>
                {data.map((item, idx) => (
                    <div key={idx} className={`w-1/4 ${homePage && "border hover:bg-white hover:border-white hover:shadow-xl transition-all duration-500"} rounded-lg p-10 gap-5 flex flex-col`}>
                        {item.icone}
                        <h3 className="text-2xl">{item.titulo}</h3>
                        {homePage && <hr />}
                        <p className="text-lg text-[#aeaeae]">{item.paragrafo}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}