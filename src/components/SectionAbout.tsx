import Image from "next/image";
import { Container } from "./Container";
import Nurse1 from "@/assets/nurse1.png"
import WhatsappWhite from "@/assets/whatsappWhite.png"



export function SectionAbout() {
    return (
        <section className="relative w-full flex" id="About">
            <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                
                {/* Imagem - Exibida apenas em telas a partir de 1024px */}
                <div className="hidden lg:flex items-center justify-center mt-5">
                    <Image src={Nurse1} alt="Phone" className="mr-5 h-[650px]" />
                </div>

                {/* Conteúdo - Centralizado quando a imagem está oculta */}
                <Container>
                    <div className="max-w-[550px] pt-12 justify-start">
                        <span className="block text-primary-gray text-sm font-bold uppercase mb-6">Sobre Nós</span>
                        <h2 className="text-primary-green text-[32px] lg:text-[40px] font-bold leading-tight mb-6">
                            Serviços especializados de enfermagem e cuidados.
                        </h2>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 text-lg">
                        Na Afecto, cuidar é nossa forma de demonstrar amor. Recebemos a confiança de quem nos escolhe com respeito, dedicação e carinho, oferecendo mais do que serviços: entregamos conforto, atenção e tranquilidade.
                        </p>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 pt-6 text-lg">
                        Nossos cuidadores são treinados para unir suporte técnico à humanização, respeitando a rotina e a independência de cada cliente. Com supervisão especializada, criamos planos de cuidado personalizados, ajustados às necessidades de cada pessoa.
                        </p>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 pt-6 text-lg">
                        Prezamos pela transparência, registrando as atividades diárias em um livro acessível às famílias, fortalecendo a confiança e proporcionando segurança.
                        </p>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 pt-6 text-lg">
                        Na Afecto, o cuidado é feito com qualidade, afeto e compromisso em cada detalhe.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center  mt-8 mb-12">
                            <a 
                                href="https://wa.me/5548996864536" // Substitua pelo número correto com o código do país
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="relative flex gap-2 px-6 py-4 text-white rounded-lg bg-primary-green hover:bg-light-green transition duration-200 items-center"
                            >
                                <Image src={WhatsappWhite} alt="WhatsappWhite" className="h-6 w-6"/>
                                <span className="ml-2 font-bold">Faça um orçamento</span>
                            </a>

                        </div>
                        

                    </div>
                </Container>
            </div>
        </section>
    );
}


