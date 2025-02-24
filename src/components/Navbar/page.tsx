import { FontInter } from "@/src/utils/util";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

interface NavbarComponentProps {
    hasLogo?: boolean;
}

export default function NavbarComponent(props: NavbarComponentProps) {
    return (
        <>
            <main className={`w-full flex justify-between bg-[#151515] px-32 py-6 ${FontInter.className}`}>
                <section className="flex md:gap-10 text-xs w-full">
                    <span className="flex md:gap-2 text-white items-center">
                        <Phone color="#F2BC57" width={16} height={20} />
                        <p>(45) 99844-2372, (45) 99844-2372</p>
                    </span>
                    <span className="flex md:gap-2 text-white items-center">
                        <Mail color="#F2BC57" width={16} height={20} />
                        <p>turismo@turismovan.com</p>
                    </span>
                    <span className="flex md:gap-2 text-white items-center">
                        <MapPin color="#F2BC57" width={16} height={20} />
                        <p>R. Curitiba, 2751 - Alto Alegre, Cascavel - PR</p>
                    </span>
                </section>
                <section className="flex md:gap-5">
                    <Facebook color="#FFF" width={16} height={20} />
                    <Instagram color="#FFF" width={16} height={20} />
                </section>
            </main>
        </>
    )
}