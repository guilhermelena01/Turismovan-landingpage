import { FontOswald } from "@/src/utils/util";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <section className={`${FontOswald.className} text-white bg-[#151515] py-10 flex justify-center`}>
            <div className="items-center flex justify-between w-1/2">
                <Image className="brightness-75 hover:brightness-100 transition-all duration-300" alt="Turismovan logo" src={"https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741420274/_TURISMOVAN__ARTES___2__page-0002-removebg-preview_ewqaih.webp"} width={120} height={72} />
                <span><p>2024 Todos os direitos reservados. Design by Guilherme Lena</p></span>
                <span className="flex gap-5">
                    <Facebook />
                    <Instagram />
                </span>
            </div>
        </section>
    )
}