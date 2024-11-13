import { Container } from "./Container";
import Image from "next/image";
import Arrow from "@/assets/arrow-explorer.svg"
import WhatsappWhite from "@/assets/whatsappWhite.png"

export function SectionHero () {
    return (
        <section className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-img_back_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-full md:max-w-[550px] mt-10 md:mt-16 lg:mt-20 text-center md:text-left">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        Cuidado e Conforto, Onde e Quando Você Precisa
                    </h1>
                    <p className="text-white text-base md:text-lg lg:text-xl max-w-full md:max-w-[500px] mb-6 md:mb-8">
                        Na Afecto, a gente entende que o cuidado vai além da saúde. Nossa equipe oferece um atendimento completo e personalizado, com toda a segurança e atenção que você merece.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-20">
                    <a 
                        href="https://wa.me/5548996864536" // Substitua pelo número correto com o código do país
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="relative flex gap-2 px-6 py-4 text-white rounded-lg bg-primary-blue hover:bg-[#72e2d5] transition duration-200 items-center"
                    >
                        <Image src={WhatsappWhite} alt="WhatsappWhite" className="h-6 w-6"/>
                        <span className="ml-2 font-bold">Faça um orçamento</span>
                    </a>

                    </div>
                    <button className="flex items-center gap-3 justify-center md:justify-start">
                        <Image src={Arrow} alt="Arrow"/>
                        <span className="text-white text-sm font-bold">Continue explorando</span>
                    </button>
                </div>
            </Container>
        </section>
    )
}
