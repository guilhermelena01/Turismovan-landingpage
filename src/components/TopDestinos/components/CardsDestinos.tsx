import { MessageCircleQuestionIcon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick"; // Opcional, para carrossel com react-slick

type CardsData = {
    imageSrc: string;
    destino: string;
    valor: string;
};

interface CardsDestinosProps {
    data: Array<CardsData>;
    homepage?: boolean;
}

export default function CardsDestinos({ data, homepage }: CardsDestinosProps) {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Configurações do carrossel (usando react-slick)
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index: number) => setCurrentIndex(index),
    };

    // Função para abrir o carrossel
    function openCarousel(index: number) {
        setCurrentIndex(index);
        setIsCarouselOpen(true);
    };

    // Função para fechar o carrossel
    const closeCarousel = () => {
        setIsCarouselOpen(false);
    };

    return (
        <>
            <div className="w-full grid grid-cols-3 gap-12 text-grafite">
                {data.map((item, idx) => (
                    <div key={idx} className={`flex flex-col gap-2 ${!homepage && "gap-8"}`}>
                        {/* Imagem com efeito de hover e ícone de lupa */}
                        <div
                            className="relative"
                        // onClick={() => openCarousel(idx)}
                        >
                            <Image
                                src={item.imageSrc}
                                className="rounded-xl w-full max-h-[314px] transition-all duration-300"
                                width={448}
                                height={248}
                                alt={`${item.destino}`}
                            />
                            {/* Efeito de hover com tom amarelado */}
                            <div
                                className="absolute inset-0 bg-yellow-200 opacity-0 rounded-xl transition-opacity duration-300 hover:opacity-50 flex items-center justify-center"
                                onClick={() => openCarousel(idx)} // Evita que o clique no overlay dispare o carrossel
                            >
                                <svg
                                    className="w-12 h-12 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <span className="w-full flex justify-between relative">
                            <p className={`text-2xl ${!homepage && "text-amarelo_Mostarda"}`}>
                                {item.destino}
                            </p>
                            {homepage && (
                                <p className="text-2xl text-laranja_Forte mr-6">{item.valor}</p>
                            )}
                            {homepage && (
                                <span className="absolute right-0">
                                    <MessageCircleQuestionIcon width={18} color="#ec7f24" />
                                </span>
                            )}
                        </span>
                    </div>
                ))}
            </div>

            {/* Carrossel */}
            {isCarouselOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl">
                        {/* Botão para fechar o carrossel */}
                        <button
                            className="cursor-pointer absolute top-4 right-4 z-10 text-white text-2xl"
                            onClick={closeCarousel}
                        >
                            <X />
                        </button>
                        {/* Carrossel com react-slick */}
                        <Slider {...sliderSettings}>
                            {data.map((item, idx) => (
                                <div key={idx} className="p-4">
                                    <Image
                                        src={item.imageSrc} // Substitua por um array de imagens se desejar
                                        width={400}
                                        height={300}
                                        alt={`${item.destino} - Slide ${idx + 1}`}
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </>
    );
}