import Image from "next/image";
import CustomButton from "../Standard/Button";
import Link from "next/link";
import { FontOswald } from "@/src/utils/util";
import { useRouter } from "next/navigation";

interface TopbarProps {
    homePage?: boolean;
}

export default function Topbar({ homePage }: TopbarProps) {
    const router = useRouter()
    return (
        <>
            <section className={`${homePage ? "" : "fixed top-0 z-10"} w-full flex justify-between px-32 py-6 ${FontOswald.className}`}>
                {homePage ?
                    <Image alt="Turismovan logo" src={"https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740266341/Design_sem_nome_3_exieei.webp"} width={120} height={72} /> :
                    <Image className="brightness-75 hover:brightness-100 transition-all duration-300" alt="Turismovan logo" src={"https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741420274/_TURISMOVAN__ARTES___2__page-0002-removebg-preview_ewqaih.webp"} width={120} height={72} />
                }
                <div className={`flex w-full items-center gap-14 ${homePage ? "justify-center" : "justify-end"}`}>
                    <Link onClick={() => router.push("/")} className={`${homePage ? "text-grafite" : "text-white"} text-lg font-semibold border-b-4 border-transparent transition-all duration-300 hover:text-laranja_Forte hover:border-b-4 hover:border-laranja_Forte`} href={"#"}>INICIO</Link>
                    <Link onClick={() => router.push("/aboutUs")} className={`${homePage ? "text-grafite" : "text-white"} text-lg font-semibold border-b-4 border-transparent transition-all duration-300 hover:text-laranja_Forte hover:border-b-4 hover:border-laranja_Forte`} href={"#"}>SOBRE NÓS</Link>
                    <Link onClick={() => router.push("/contact")} className={`${homePage ? "text-grafite" : "text-white"} text-lg font-semibold border-b-4 border-transparent transition-all duration-300 hover:text-laranja_Forte hover:border-b-4 hover:border-laranja_Forte`} href={"#"}>CONTATO</Link>
                </div>
                {homePage &&
                    <CustomButton
                        text="RESERVE AGORA"
                        backgroundColor=""
                        color="#fff"
                        classname="justify-center hover:bg-[#082e63] bg-laranja_Forte transition-all duration-300"
                    />
                }
            </section>
        </>
    )
}