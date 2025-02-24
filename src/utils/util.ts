import { Inter, Oswald } from "next/font/google";

export const FontInter = Inter({
    weight: ['100', '200', '300', '400', '700', '900'],
    preload: false,
    subsets: ["latin"]
})

export const FontOswald = Oswald({
    weight: ["200", "300", "400", "500", "600", "700"],
    preload: false,
    subsets: ["latin"]
})