import { FontOswald } from "@/src/utils/util";
import Image from "next/image";
import CustomButton from "../Standard/Button";
import Calculadora from "./components/Calculadora";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BannerPrincipalProps {
    homePage?: boolean;
    title?: string;
    subtitle?: string;
    route?: string;
}

export default function BannerPrincipal({ homePage, subtitle, title, route }: BannerPrincipalProps) {

    return (
        <>
            <section className={`w-full flex ${FontOswald.className}`}>
                <Image
                    alt="Balneario Camboriú"
                    src={"https://res.cloudinary.com/dbyqw2jjq/image/upload/v1740269289/beautiful-shot-copacabana-beach-rio-de-janeiro-sunrise_njyllc.webp"}
                    width={"1920"} height={"712"}
                    className="brightness-75 h-screen"
                />
                <div className="w-full flex absolute h-dvh items-center text-white px-48 gap-48">
                    <span className={`flex flex-col gap-7 justify-center ${homePage ? "w-[55%]" : "w-full"}`}>
                        {homePage ?
                            <>
                                <h1 className="text-5xl my-12">A VIAGEM DOS SEUS SONHOS</h1>
                                <p className="text-lg font-extralight w-10/12">A viagem dos seus sonhos está ao seu alcance! Descubra destinos incríveis, viva experiências únicas e crie memórias inesquecíveis com quem você ama. Embarque nessa aventura agora!</p>
                                <CustomButton
                                    text="SAIBA MAIS"
                                    hasBorder
                                    backgroundColor=""
                                    color="#fff"
                                    classname="w-fit hover:bg-laranja_Forte transition-all duration-300 hover:border-laranja_Forte"
                                />
                            </> :
                            <div className="flex items-center flex-col gap-5">
                                <p className="text-3xl font-light">{title}</p>
                                <p className="text-[80px]">{subtitle}</p>
                                <span className="flex font-light gap-1">
                                    <Link href={"/"}>Home</Link>
                                    <ArrowRight className="w-4 h-6"/>
                                    <Link href={"#"}>{route}</Link>
                                </span>
                            </div>
                        }
                    </span>
                    {homePage && <div className="w-[45%]"><Calculadora /></div>}
                </div>
            </section>
        </>
    )
}