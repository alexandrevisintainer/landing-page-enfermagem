import Image from "next/image";
import { Container } from "./Container";
import Nurse1 from "@/assets/nurse1.png"
import WhatsappGreen from "@/assets/whatsappGreen.png"
import WhatsappWhite from "@/assets/whatsappWhite.png"



export function SectionAbout() {
    return (
        <section className="relative w-full flex" id="About">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                
                {/* Imagem - Exibida apenas em telas a partir de 1024px */}
                <div className="hidden lg:flex items-center justify-center mt-5">
                    <Image src={Nurse1} alt="Phone" className="mr-5 h-[650px]" />
                </div>

                {/* Conteúdo - Centralizado quando a imagem está oculta */}
                <Container className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="max-w-[550px] pt-12 lg:pt-24">
                        <span className="block text-primary-gray text-sm font-bold uppercase mb-6">Sobre Nós</span>
                        <h2 className="text-primary-blue text-[32px] lg:text-[40px] font-bold leading-tight mb-6">
                            SERVIÇOS ESPECIALIZADOS DE ENFERMAGEM E CUIDADOS
                        </h2>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 text-lg">
                            Cuidamos de cada detalhe para oferecer serviços especializados de enfermagem e assistência em casa ou no hospital, com suporte em consultas, passeios, recuperação pós-cirúrgica e curativos. Atendemos idosos, pessoas com deficiência, bebês e gestantes, sempre focados em suas necessidades.
                        </p>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 pt-6 text-lg">
                            Nos orgulhamos em estar ao lado de quem precisa de ajuda e apoiar cada família para que vivam com tranquilidade e qualidade.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 mt-6 md:mb-6">
                            <a 
                            href="https://wa.me/5548996864536" // Substitua pelo número correto com o código do país
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="relative flex gap-2 px-6 py-4 border-2 border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition duration-200 items-center group"
                            >
                                <Image src={WhatsappGreen} alt="WhatsappWhite" className="h-6 w-6 group-hover:opacity-0"/>
                                <Image src={WhatsappWhite} alt="Whatsapp" className="h-6 w-6 opacity-0 group-hover:opacity-100 absolute"/>
                                <span className="ml-2 font-bold">Faça um orçamento</span>
                        </a>
                        </div>
                        

                    </div>
                </Container>
            </div>
        </section>
    );
}


