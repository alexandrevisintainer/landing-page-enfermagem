import Image from "next/image";
import Telefone from "@/assets/telefone.png"
import Email from "@/assets/e-mail.png"
import Logo from "@/assets/logo.svg"
import Instagram from "@/assets/instagram.png"


export function Footer() {
    return (
        <footer className="w-full h-full bg-back-green" id="Footer">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto py-4 gap-5">
                
                {/* Logo */}
                <div className="flex items-center gap-14 max-h-16 max-w-48">
                    <Image src={Logo} alt="Logo" className="h-full w-full" />
                </div>

                {/* Informações de Contato - Alinhada à direita em telas maiores */}
                <div className="flex-1 flex justify-end">
                    <ul className="flex flex-col sm:flex-row gap-6">
                        <li className="flex gap-4 items-center">
                            <Image src={Telefone} alt="Telefone" className="h-6 w-6"/>
                            <p className="font-bold text-primary-green">+55 48 99686-4536</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <a href="https://www.instagram.com/afectohomecare/?utm_source=ig_web_button_share_sheet" className="flex gap-4 items-center">
                                <Image src={Instagram} alt="Telefone" className="h-6 w-6"/>
                                <p className="font-bold text-primary-green hover:text-light-green">@afectohomecare</p>
                            </a>
                            
                        </li>
                        <li className="flex gap-4 items-center">
                            <Image src={Email} alt="E-mail" className="h-6 w-6"/>
                            <p className="font-bold text-primary-green">afectocarehome@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


