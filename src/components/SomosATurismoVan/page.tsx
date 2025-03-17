import { FontOswald } from '@/src/utils/util';
import Image from 'next/image';
import React, { useState } from 'react';

const SomosATurismoVan = () => {
    const [showFullMessage, setShowFullMessage] = useState(false)

    return (
        <div className={`bg-white py-48 flex items-center justify-center ${FontOswald.className}`}>
            <div className="max-w-7xl gap-24 mx-auto flex flex-col md:flex-row items-center justify-between p-6">
                {/* Image */}
                <Image
                    src="https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741576841/image_4_yhg3va.webp"
                    alt="Person with Globe"
                    className="object-cover rounded-lg shadow-lg"
                    width={500}
                    height={420}
                />

                {/* Text and Button */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-5xl text-grafite mb-6">
                        OLÁ, SOMOS A TURISMOVAN
                    </h1>
                    <p className="text-gray-500 mb-8 font-extralight text-2xl">
                        Com mais de 30 anos de experiência no mercado, temos como maior objetivo realizar sonhos e proporcionar experiências inesquecíveis. Trabalhamos com dedicação para transformar cada viagem em uma jornada única, cheia de momentos especiais e memórias que durarão para sempre.
                    </p>
                    <p className={`text-[#aeaeae] opacity-85 font-extralight text-lg overflow-hidden ${showFullMessage ? "h-fit" : "h-28"}`}>
                        Oferecemos transporte seguro, confortável e planejado para atender às suas necessidades, seja para passeios turísticos, viagens em grupo, traslados ou eventos especiais. Nossa equipe de motoristas experientes e veículos modernos garantem um serviço de alta qualidade, prezando sempre pelo seu conforto e segurança.

                        Seja qual for o destino, estamos prontos para levá-lo com todo o cuidado e profissionalismo que você merece. Viajar com a TurismoVan é mais do que um simples deslocamento—é uma experiência inesquecível.

                        Entre em contato e embarque com a gente nessa aventura!
                    </p>
                    <button
                        onClick={() => setShowFullMessage(!showFullMessage)}
                        className="mt-4 bg-white absolute border border-gray-500 text-grafite py-4 px-12 rounded-full hover:bg-laranja_Forte hover:border-laranja_Forte hover:text-white transition duration-300">
                        VER MAIS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SomosATurismoVan;