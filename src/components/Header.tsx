import Image from "next/image"
import Logo from '@/assets/logo.svg'
import { ItemMenu } from "./ItemMenu"
import { Search } from "./Search"
import IconUser from "@/assets/icon-user.svg"
import Arrow from '@/assets/arrow-down.svg'
import Whatsapp from "@/assets/whatsapp.png"
import WhatsappGreen from "@/assets/whatsappGreen.png"
import WhatsappWhite from "@/assets/whatsappWhite.png"

export function Header(){
    return(
        <header className=" relative flex items-center w-full h-20 bg-white">
            <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image src={Logo} alt="Logo" className="h-14 w-32"/>
                    </div>
                    <ul className=" hidden lg:flex items-center gap-12 text-second-gray">
                            <li>
                             <a className="flex items-center gap-3" href="#Servicos">
                                <span className="text-primary-gray font-bold hover:text-primary-blue">Serviços</span>
                             </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3" href="#About">
                                    <span className="text-primary-gray font-bold hover:text-primary-blue">Sobre nós</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center gap-3" href="#Footer">
                                    <span className="text-primary-gray font-bold hover:text-primary-blue">Contato</span>
                                </a>
                            </li>
                        </ul>
                            <a 
                                href="https://wa.me/5548996864536" // Substitua pelo número correto com o código do país
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hidden sm:flex relative gap-2 px-4 py-2 border-2 border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition duration-200 items-center group"
                            >
                                <Image src={WhatsappGreen} alt="Whatsapp" className="h-6 w-6 group-hover:opacity-0"/>
                                <Image src={WhatsappWhite} alt="WhatsappWhite" className="h-6 w-6 opacity-0 group-hover:opacity-100 absolute"/>
                                <span className="font-bold ml-2">Envie uma Mensagem</span>
                            </a>
                </div>
            </div>
        </header>
    )
}