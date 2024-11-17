"use client";

import Image from "next/image"
import Logo from '@/assets/logo.svg'
import { ButtonWhatsapp } from "./ButtonWhatsapp"
import { useState } from "react";


export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="relative flex items-center w-full h-20 bg-[#ccfff9]">
            <div className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                
                {/* Logo */}
                <div className="flex items-center gap-14 max-h-16 max-w-48">
                    <Image src={Logo} alt="Logo" className="h-full w-full" />
                </div>
                
                {/* Menu para telas grandes */}
                <ul className="hidden lg:flex items-center gap-12 text-second-gray">
                    <li>
                        <a className="text-primary-gray font-bold hover:text-primary-blue" href="#About">Sobre nós</a>
                    </li>
                    <li>
                        <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Advantages">Vantagens</a>
                    </li>
                    <li>
                        <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Services">Serviços</a>
                    </li>
                    <li>
                        <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Orcamento">Orçamento</a>
                    </li>
                    <li>
                        <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Footer">Contato</a>
                    </li>
                </ul>

                {/* Botão de menu mobile */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-primary-blue">
                        <span className="text-2xl">&#9776;</span> {/* Ícone de hambúrguer */}
                    </button>
                </div>

                {/* Botão WhatsApp para todas as telas grandes */}
                <div className="hidden lg:block">
                    <ButtonWhatsapp />
                </div>

                {/* Menu Mobile */}
                {isMobileMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-[#ccfff9] lg:hidden">
                        <ul className="flex flex-col items-center gap-6 py-4">
                            <li>
                                <a className="text-primary-gray font-bold hover:text-primary-blue" href="#About" onClick={toggleMobileMenu}>Sobre nós</a>
                            </li>
                            <li>
                                <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Advantages" onClick={toggleMobileMenu}>Vantagens</a>
                            </li>
                            <li>
                                <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Servicos" onClick={toggleMobileMenu}>Serviços</a>
                            </li>
                            <li>
                                <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Orcamento" onClick={toggleMobileMenu}>Orçamento</a>
                            </li>
                            <li>
                                <a className="text-primary-gray font-bold hover:text-primary-blue" href="#Footer" onClick={toggleMobileMenu}>Contato</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

