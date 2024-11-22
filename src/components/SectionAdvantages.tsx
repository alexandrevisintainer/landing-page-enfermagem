import Image from "next/image";
import { Container } from "./Container";
import ServicesImg from "@/assets/ServicesImg.png"
import Check from "@/assets/Check.svg"


export function SectionAdvantages() {
    return (
        <section className="relative w-full h-full flex flex-col lg:flex-srow" id="Advantages">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-[1246px] px-[15px] mx-auto ">
                <Container>
                    <div className="flex-1 max-w-full lg:max-w-[700px] pt-4 px-4 lg:pr-8">
                        <h2 className="text-primary-green text-[32px] lg:text-[40px] font-bold leading-tight mb-4 lg:mb-6" id="Advantages">
                        Por Que Escolher a Afecto?
                        </h2>
                        <p className="text-base lg:text-lg max-w-[554px] lg:max-w-[554px] mb-4 lg:mb-8 text-second-gray">
                        Na Afecto, garantimos um serviço que se destaca por sua qualidade e atenção aos detalhes. Confira as razões que fazem nossos cuidados conquistarem a confiança de nossos pacientes e suas famílias:
                        </p>
                        <div className="flex flex-col lg:flex-row lg:gap-6 gap-4 flex-wrap">
                            <ul className="flex flex-col items-start gap-4 lg:gap-9 w-full lg:w-auto">
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Planos adaptáveis e personalizados</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Avaliação inicial gratuita</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Cuidadores capacitados e supervisionados</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Responsabilidade legal pelo cuidador</h3>
                                    </div>
                                </li>
                            </ul>

                            <ul className="flex flex-col items-start gap-4 lg:gap-9 w-full lg:w-auto">
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Planos específicos para cada situação</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Apoio aos familiares</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Troca de cuidador em caso de não adaptação</h3>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 pb-2 lg:pb-4 border-b-[1px] border-opacity-gray h-14">
                                    <div className="w-[28px] h-[28px] flex items-center justify-center gap-1">
                                        <Image src={Check} alt="Phone Icon" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col w-full lg:w-52">
                                        <h3 className="text-base lg:text-lg font-medium">Relatórios diários aos familiares</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Container>
                <div className="mt-8 lg:mt-44  bg-white flex items-center justify-center">
                    <Image src={ServicesImg} alt="Phone" className="max-h-[500px] max-w-[80%] lg:max-w-[500px] mb-6" />
                </div>
            </div>
        </section>
    );
}

