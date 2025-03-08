import Image from "next/image";
import CustomButton from "../Standard/Button";
import Link from "next/link";
import { FontOswald } from "@/src/utils/util";

export default function Header() {
    return (
        <>
            <section className={`w-full flex justify-between px-32 py-6 ${FontOswald.className}`}>
                <Image alt="Turismovan logo" src={"https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740266341/Design_sem_nome_3_exieei.webp"} width={120} height={72} />
                <div className="flex w-full justify-center items-center gap-14">
                    <Link className="text-lg font-semibold text-grafite border-b-4 border-transparent transition-all duration-300 hover:text-laranja_Forte hover:border-b-4 hover:border-laranja_Forte" href={"#"}>INICIO</Link>
                    <Link className="text-lg font-semibold text-grafite border-b-4 border-transparent transition-all duration-300 hover:text-laranja_Forte hover:border-b-4 hover:border-laranja_Forte" href={"#"}>SOBRE NÓS</Link>
                    <Link className="text-lg font-semibold text-grafite border-b-4 border-transparent transition-all duration-300 hover:text-laranja_Forte hover:border-b-4 hover:border-laranja_Forte" href={"#"}>CONTATO</Link>
                </div>
                <CustomButton
                    text="RESERVE AGORA"
                    backgroundColor=""
                    color="#fff"
                    classname="justify-center hover:bg-[#082e63] bg-laranja_Forte transition-all duration-300"
                />
            </section>
        </>
    )
}