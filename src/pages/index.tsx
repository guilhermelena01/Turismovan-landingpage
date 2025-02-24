import useAppData from "../data/hook/useAppData";
import Header from "../components/Header";
import NavbarComponent from "../components/Navbar/page";
import BannerPrincipal from "../components/BannerPrincipal/page";
import TopDestinos from "../components/TopDestinos/page";
import NossosServicos from "../components/NossosServicos/page";

export default function Home() {

  const { handleSelectedRoute, selectedRoute } = useAppData()

  return (
    <>
      <NavbarComponent/>
      <Header/>
      <BannerPrincipal/>
      <TopDestinos/>
      <NossosServicos/>
    </>
  )
}
