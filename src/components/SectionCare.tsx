import Image from "next/image";
import horas from "@/assets/24h.png"
import years from "@/assets/5years.png"
import adapt from "@/assets/adapt.png"
import training from "@/assets/training.png"

export function SectionCare () {
    return (
        <section className="relative w-full flex items-center justify-center min-h-screen bg-back-green" id="Care">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto justify-center">
                    <div className="max-w-[1200px] mx-auto pt-12 lg:pt-24 text-center pb-12 justify-center align">
                        <h2 className="text-primary-gray text-[32px] lg:text-[40px] font-bold leading-tight mb-6">
                            Especializados em Cuidados Completos
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 text-center justify-center">
                            Cuidamos com excelência de idosos, adultos e crianças, oferecendo apoio completo e adaptado às necessidades de cada paciente.
                        </p>
                        
                        {/* Cards de Tópicos */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-5 border bg-primary-blue rounded-3xl shadow-lg m-4 flex flex-col items-center text-center">
                            <Image src={horas} alt="24 Horas" className="w-24 h-24"/>
                            <h3 className="text-white font-bold text-2xl mb-2 lg:text-3xl">Assistência 24 horas</h3>
                            <p className="text-white text-lg">
                                Sempre disponíveis para garantir cuidado e segurança em todos os momentos.
                            </p>
                        </div>
                            <div className="p-5 border bg-primary-blue rounded-3xl shadow-lg m-4 flex flex-col items-center text-center">
                                <Image src={years} alt="5 anos" className="w-24 h-24"/>
                                <h3 className="text-white font-bold text-2xl mb-2 lg:text-3xl">5 anos de experiência</h3>
                                <p className="text-white text-lg">
                                    Experiência comprovada e atendimento com total segurança e conformidade legal.
                                </p>
                            </div>
                            <div className="p-5 border bg-primary-blue rounded-3xl shadow-lg m-4 flex flex-col items-center text-center">
                                <Image src={adapt} alt="Adaptation" className="w-24 h-24"/>
                                <h3 className="text-white font-bold text-2xl mb-2 lg:text-3xl">Acompanhamento e adaptação</h3>
                                <p className="text-white text-lg">
                                    Nossa equipe apoia pacientes em suas adaptações e transições.
                                </p>
                            </div>
                            <div className="p-5 border bg-primary-blue rounded-3xl shadow-lg m-4 flex flex-col items-center text-center">
                                <div className="gap-5">
                                    <Image src={training} alt="Treinamento" className="w-24 h-24"/>
                                </div>
                                    <h3 className="text-white font-bold text-2xl mb-2 lg:text-3xl">Treinamentos constantes</h3>
                                    <p className="text-white text-lg">
                                    Investimos na qualificação contínua dos cuidadores para manter um alto padrão de atendimento.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
