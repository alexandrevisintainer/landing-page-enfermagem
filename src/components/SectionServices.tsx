import Image from "next/image";
import { Container } from "./Container";
import ServicesImg from "@/assets/ServicesImg.png"
import Homecare from "@/assets/homecare.png"
import Curativo from "@/assets/curativo.png"
import Idosos from "@/assets/Idosos.png"
import Gravida from "@/assets/gravida.png"


export function SectionServices() {
    return (
        <section className="relative w-full h-full flex flex-col lg:flex-row" id="Servicos">
            <Container>
                <div className="flex-1 max-w-full lg:max-w-[594px] pt-12 px-4 lg:pt-24 lg:pr-8">
                    <span className="block text-primary-gray text-sm font-bold uppercase mb-4 lg:mb-6">Serviços exclusivos</span>
                    <h2 className="text-primary-blue text-3xl lg:text-[56px] font-bold leading-tight mb-4 lg:mb-6">
                        Serviços Oferecidos
                    </h2>
                    <p className="text-base lg:text-lg max-w-[554px] lg:max-w-[554px] mb-8 lg:mb-16 text-second-gray">
                        Na Afecto, cada cuidado é pensado com carinho e atenção aos detalhes, para que você e sua família tenham conforto e segurança em cada momento.
                    </p>
                    <ul className="flex flex-col items-start gap-6 lg:gap-9">
                        <li className="flex items-center gap-6 lg:gap-9 pb-4 lg:pb-6 border-b-[1px] border-opacity-gray">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Homecare} alt="Phone Icon" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Enfermagem Domiciliar</h3>
                                <p className="text-txt-gray text-sm lg:text-base flex-1 pr-4">
                                    Atendimento diário para monitoramento e cuidados básicos com toda a segurança e carinho.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-6 lg:gap-9 pb-4 lg:pb-6 border-b-[1px] border-opacity-gray">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Curativo} alt="Phone Icon" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Cuidados Pós-Cirúrgicos</h3>
                                <p className="text-txt-gray text-sm lg:text-base flex-1 pr-4">
                                    Recuperação em casa com profissionais capacitados para garantir uma recuperação segura e tranquila.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-6 lg:gap-9 pb-4 lg:pb-6 border-b-[1px] border-opacity-gray">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Idosos} alt="Idosos" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Assistência para Idosos</h3>
                                <p className="text-txt-gray text-sm lg:text-base flex-1 pr-4">
                                    Cuidado especializado e acompanhamento diário para promover qualidade de vida e independência.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-6 lg:gap-9 pb-4 lg:pb-6 border-opacity-gray">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Gravida} alt="Gravida" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Cuidador de gestantes</h3>
                                <p className="text-txt-gray text-sm lg:text-base flex-1 pr-4">
                                Com preparo e dedicação, nossos cuidadores podem auxiliar na higiene, a alimentação, na rotina em casa, no acompanhamento das consultas e até em casos de internação.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="mt-8 lg:mt-0 lg:absolute lg:top-0 lg:right-0 lg:h-full w-full lg:w-[36%] lg:bg-gray-phone bg-white flex items-center justify-center lg:justify-end">
                <Image src={ServicesImg} alt="Phone" className="max-w-[80%] lg:max-w-full lg:translate-x-[-35%]" />
            </div>
        </section>
    );
}

