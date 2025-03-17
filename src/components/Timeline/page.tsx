import { FontOswald } from '@/src/utils/util';
import React from 'react';

const Timeline = () => {
    return (
        <div className={`bg-[#333333] text-white py-48 p-6 ${FontOswald.className}`}>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl text-center mb-10">
                    LINHA DO TEMPO DA AGÊNCIA
                </h1>
                <p className="text-center mb-12 text-gray-400">
                    Conheça nossa jornada: explore a timeline e descubra os momentos que marcaram a história da nossa empresa de turismo, transformando sonhos em viagens inesquecíveis.
                </p>

                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Timeline Text */}
                    <div className="w-full md:w-2/3 pr-6">
                        <div className="relative border-l-2 border-orange-500">
                            {/* Timeline Item 1 */}
                            <div className="ml-6 mb-12">
                                <span className="absolute -left-2 bg-orange-500 h-3 w-3 rounded-full mt-1.5"></span>
                                <p className="text-sm text-gray-400">Abril 1994</p>
                                <h2 className="text-xl font-semibold mt-2">Compramos nossa primeira van</h2>
                                <p className="mt-2 text-gray-300">
                                    Foi aí que tudo começou! Com essa van, demos nossos primeiros passos no turismo, levando conforto e segurança para os passageiros. Desde então, seguimos crescendo e colecionando histórias incríveis ao lado de quem viaja com a gente.
                                </p>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="ml-6 mb-12">
                                <span className="absolute -left-2 bg-orange-500 h-3 w-3 rounded-full mt-1.5"></span>
                                <p className="text-sm text-gray-400">Junho 2005</p>
                                <h2 className="text-xl font-semibold mt-2">Realizamos nossa primeira viagem internacional</h2>
                                <p className="mt-2 text-gray-300">
                                    Devidamente licenciados com a licença internacional de transporte de passageiros, realizamos nossa primeira viagem ao exterior, mais precisamente para Buenos Aires, Argentina.
                                </p>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="ml-6">
                                <span className="absolute -left-2 bg-orange-500 h-3 w-3 rounded-full mt-1.5"></span>
                                <p className="text-sm text-gray-400">2014</p>
                                <h2 className="text-xl font-semibold mt-2">Mais de 3000 viagens realizadas.</h2>
                                <p className="mt-2 text-gray-300">
                                    Em 2014, alcançamos a marca de 3.000 viagens realizadas. Realizamos sonhos, levamos pessoas a lugares incríveis e, o melhor, criamos histórias e construímos amizades duradouras.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="w-full md:w-1/3 mt-6 md:mt-0">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Image 1 */}
                            <img
                                src="https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741697307/image_5_rxnbt2.webp"
                                alt="Van Exterior"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            {/* Image 2 */}
                            <img
                                src="https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741697325/Captura_de_tela_de_2024-12-21_00-23-17_1_gnv0be.webp"
                                alt="Van Interior"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            {/* Image 3 */}
                            <img
                                src="https://res.cloudinary.com/dbyqw2jjq/image/upload/v1741697326/Captura_de_tela_de_2024-12-21_00-24-15_1_ws8ybu.webp"
                                alt="Group Photo"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;