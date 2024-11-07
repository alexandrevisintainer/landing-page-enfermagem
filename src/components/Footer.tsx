import Image from "next/image";
import Telefone from "@/assets/telefone.png"
import Email from "@/assets/e-mail.png"
import LogoLight from "@/assets/logolight.png"

export function Footer() {
    return (
        <footer className="w-full h-full bg-primary-blue" id="Footer">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto py-4 gap-5">
                
                {/* Logo */}
                <div className="flex items-center">
                    <Image src={LogoLight} alt="Logo" className="h-16 w-36"/>
                </div>

                {/* Informações de Contato - Alinhada à direita em telas maiores */}
                <div className="flex-1 flex justify-end">
                    <ul className="flex flex-col sm:flex-row gap-6">
                        <li className="flex gap-4 items-center">
                            <Image src={Telefone} alt="Telefone" className="h-6 w-6"/>
                            <p className="font-bold text-white">+55 48 99686-4536</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Image src={Email} alt="E-mail" className="h-6 w-6"/>
                            <p className="font-bold text-white">afectocarehome@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


