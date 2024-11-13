import WhatsappWhite from "@/assets/whatsappWhite.png"
import Image from 'next/image'

export function ButtonWhatsapp() {
    return(
        <a 
            href="https://wa.me/5548996864536" // Substitua pelo número correto com o código do país
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative flex gap-2 px-5 py-3 text-white rounded-lg bg-primary-blue transition hover:bg-[#72e2d5] duration-200 items-center"
        >
            <Image src={WhatsappWhite} alt="WhatsappWhite" className="h-6 w-6"/>
            <span className="ml-2 font-bold">Faça um orçamento</span>
        </a>
    )
}