import Image from "next/image";
import { Container } from "./Container";
import Homecare from "@/assets/homecare.png"
import Curativo from "@/assets/curativo.png"
import Idosos from "@/assets/idosos.png"
import Gravida from "@/assets/gravida.png"
import Enfermeira from "@/assets/enfermeira.png"


export function SectionServices() {
    return (
        <section className="relative w-full h-full flex flex-col lg:flex-row" id="Services">
            <Container>
                <div className="flex-1 max-w-full lg:max-w-[594px] pt-12 px-4 lg:pt-24 lg:pr-8">
                    <span className="block text-primary-gray text-sm font-bold uppercase mb-2 lg:mb-4">Serviços exclusivos</span>
                    <h2 className="text-primary-blue text-3xl lg:text-[56px] font-bold leading-tight mb-2 lg:mb-4">
                        Serviços Oferecidos
                    </h2>
                    <p className="text-base lg:text-lg max-w-[554px] mb-4 lg:mb-8 text-second-gray">
                        Na Afecto, cada cuidado é pensado com carinho e atenção aos detalhes, para que você e sua família tenham conforto e segurança em cada momento.
                    </p>
                    <ul className="flex flex-col items-start gap-4 lg:gap-6">
                        <li className="flex items-center gap-6 lg:gap-9 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Homecare} alt="Enfermagem Domiciliar" className="object-contain" width={64} height={64} />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Enfermagem Domiciliar</h3>
                                <p className="text-txt-gray text-sm lg:text-base flex-1 pr-4">
                                    Atendimento diário para monitoramento e cuidados básicos com toda a segurança e carinho.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-6 lg:gap-9 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Curativo} alt="Cuidados Pós-Cirúrgicos" className="object-contain" width={64} height={64} />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Cuidados Pós-Cirúrgicos</h3>
                                <p className="text-txt-gray text-sm lg:text-base flex-1 pr-4">
                                    Recuperação em casa com profissionais capacitados para garantir uma recuperação segura e tranquila.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-6 lg:gap-9 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Idosos} alt="Assistência para Idosos" className="object-contain" width={64} height={64} />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Assistência para Idosos</h3>
                                <p className="text-txt-gray text-sm lg:text-base flex-1 pr-4">
                                    Cuidado especializado e acompanhamento diário para promover qualidade de vida e independência.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center gap-6 lg:gap-9 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray mb-8">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                                <Image src={Gravida} alt="Gravida" className="object-contain" width={64} height={64} />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-base lg:text-lg font-semibold">Cuidador de Gestantes</h3>
                                <p className="text-txt-gray text-sm lg:text-base ">
                                Com preparo e dedicação, nossos cuidadores podem auxiliar na higiene, alimentação, rotina em casa, acompanhamento das consultas e até em casos de internação.
                                </p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </Container>


            <div className="mt-8 lg:mt-0 lg:absolute lg:top-0 lg:right-0 lg:h-full w-full lg:w-[36%] lg:bg-gray-phone bg-white flex items-center justify-center lg:justify-end">
                <Image src={Enfermeira} alt="Enfermeira" className="max-w-[80%] lg:max-w-full lg:translate-x-[-35%] mt-1 lg:mt-36 mb-4" />
            </div>
        </section>
    );
}

