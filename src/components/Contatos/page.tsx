import { FontOswald } from '@/src/utils/util';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Contatos = () => {
    const [showFullMessage, setShowFullMessage] = useState(false)

    return (
        <div className={`bg-white py-48 flex items-center justify-center ${FontOswald.className}`}>
            <div className="grid grid-cols-4">
                <span className='flex flex-col gap-5 items-center border-r p-4 border-[#aeaeae] border-opacity-80'>
                    <MapPin color='#6F42C1' />
                    <p className='text-lg'>ENDEREÇO</p>
                    <p className='text-[#333333]'>R. Curitiba, 2751 - Alto Alegre, Cascavel - PR</p>
                </span>
                <span className='flex flex-col gap-5 items-center border-r p-4 border-[#aeaeae] border-opacity-80'>
                    <Phone color='#6F42C1' />
                    <p className='text-lg'>FONES</p>
                    <p className='text-[#333333]'>(45) 99844-2372, (45) 99844-2372</p>
                </span>
                <span className='flex flex-col gap-5 items-center border-r p-4 border-[#aeaeae] border-opacity-80'>
                    <Mail color='#6F42C1' />
                    <p className='text-lg'>EMAIL</p>
                    <p className='text-[#333333]'>turismo@turismovan.com</p>
                </span>
                <span className='flex flex-col gap-5 items-center border-r p-4 border-[#aeaeae] border-opacity-80'>
                    <Clock color='#6F42C1' />
                    <p className='text-lg'>HORÁRIO DE ATENDIMENTO</p>
                    <p className='text-[#333333]'>Seg. à Sex  das 08 às 18:00</p>
                </span>
            </div>
        </div>
    );
};

export default Contatos;