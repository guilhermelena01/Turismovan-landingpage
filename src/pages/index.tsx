import useAppData from "../data/hook/useAppData";
import BannerPrincipal from "../components/BannerPrincipal/page";
import TopDestinos from "../components/TopDestinos/page";
import NossosServicos from "../components/NossosServicos/page";
import Testemunhos from "../components/Testemunhos/page";
import BannerMenor from "../components/BannerMenor/page";
import Footer from "../components/Footer/page";
import Header from "../components/Header/page";
import Topbar from "../components/Topbar";

export default function Home() {

  const { handleSelectedRoute, selectedRoute } = useAppData()

  return (
    <>
      <Header />
      <Topbar homePage />
      <BannerPrincipal homePage/>
      <TopDestinos/>
      <NossosServicos homePage/>
      <Testemunhos />
      <BannerMenor />
      <Footer />
    </>
  )
}
