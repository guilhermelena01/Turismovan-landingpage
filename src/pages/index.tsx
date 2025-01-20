import Image from "next/image";
import { Geist, Geist_Mono, Montserrat, Poppins, Roboto } from "next/font/google";
import useAppData from "../data/hook/useAppData";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { handleSelectedRoute, selectedRoute } = useAppData()
  return (
    <>
      <Header/>
    </>
  )
}
