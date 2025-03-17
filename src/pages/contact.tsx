import BannerPrincipal from "../components/BannerPrincipal/page";
import NossosServicos from "../components/NossosServicos/page";
import Footer from "../components/Footer/page";
import Topbar from "../components/Topbar";
import Timeline from "../components/Timeline/page";
import SomosATurismoVan from "../components/SomosATurismoVan/page";
import Destinos from "../components/Destinos/page";
import Contatos from "../components/Contatos/page";
import ContateNos from "../components/ContateNos/page";

export default function Home() {

    return (
        <>
            <Topbar />
            <BannerPrincipal title="CONTATE-NOS" subtitle="CONTATOS" route="Contatos" />
            <Contatos />
            <ContateNos/>
            <Footer />
        </>
    )
}
