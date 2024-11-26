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
                        <h2 className="text-primary-green text-[32px] lg:text-[40px] font-bold leading-tight mb-6">
                        Sobre Nós.
                        </h2>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 text-lg">
                        Na Afecto, cuidar é mais do que um trabalho — é um compromisso com o bem-estar e a felicidade de quem mais importa para você. Especializados no cuidado de idosos, adultos e crianças, oferecemos um serviço que combina excelência, dedicação e total confiança. Cada detalhe é pensado para atender às necessidades únicas de cada cliente, com planos personalizados que respeitam as suas particularidades.
                        </p>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 pt-6 text-lg">
                        Nossos cuidadores não são apenas profissionais, mas verdadeiros agentes de acolhimento. Com treinamento baseado em princípios de humanização, eles transformam os lares em espaços de conforto, harmonia e segurança, enquanto preservam rotinas e incentivam a autonomia de nossos clientes.
                        </p>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 pt-6 text-lg">
                        O grande diferencial da Afectos é a supervisão cuidadosa de uma enfermeira especializada. Essa profissional acompanha de perto cada caso, desenvolve planos de cuidado sob medida e orienta a equipe, garantindo que nossos serviços sejam realizados com a mais alta qualidade e atenção aos detalhes.
                        </p>
                        <p className="text-txt-gray flex-1 pr-4 lg:pr-0 pt-6 text-lg">
                        Para estreitar ainda mais o vínculo de confiança com os familiares, registramos diariamente tudo o que acontece em um diário de cuidados. Assim, você pode acompanhar de perto o dia a dia do seu ente querido, com a certeza de que ele está recebendo o melhor cuidado possível. Afectos: porque cuidar é nossa forma de transformar vidas.
                        </p>
                        
                        

                    </div>
                </Container>
            </div>
        </section>
    );
}


