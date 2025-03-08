import { FontOswald } from "@/src/utils/util";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

export default function Testemunhos() {
    const comentarios = [
        {
            nome: "Débora Ortega",
            comentario: "Passei momentos maravilhosos em nossas viagens a Curitiba, São Paulo e Gramado, tive experiências maravilhosas. Adorei a localização do Gorges Camp, de vista maravilhosa e de muita calmaria. O atendimento foi incrível e todos foram muito atenciosos!",
            foto: "https://res.cloudinary.com/dbyqw2jjq/image/upload/v1737761870/width_800_2_1_fwln26.webp"
        }
    ]

    return (
        <>
            <section className={`w-full flex flex-col items-center gap-24 py-14 ${FontOswald.className}`}>
                <h2 className="text-4xl">TESTEMUNHOS</h2>
                <div className="flex items-center gap-24">
                    <span className="w-1/4 flex justify-end">
                        <button className="rounded-full hover:bg-laranja_Forte hover:shadow-xl transition-all duration-300 p-2"><ChevronLeft width={32} height={32} /></button>
                    </span>
                    {comentarios.map((comentario, idx) => (
                        <div className="w-3/4 flex gap-20 justify-center" key={idx}>
                            <Image src={`${comentario.foto}`} alt="" className="rounded-full" width={210} height={210} />
                            <div className="flex flex-col gap-5">
                                <Quote className="rotate-180" width={32} height={32} />
                                <p className="text-2xl font-extralight">{comentario.comentario}</p>
                                <p className="text-azul_principal text-2xl">{comentario.nome}</p>
                                <p className="text-[#aeaeae] font-light -mt-4">Cliente</p>
                            </div>
                        </div>
                    ))}
                    <span className="w-1/4 flex justify-start">
                        <button className="rounded-full hover:bg-laranja_Forte hover:shadow-xl transition-all duration-300 p-2"><ChevronRight width={32} height={32} /></button>
                    </span>
                </div>
            </section>
        </>
    )
}