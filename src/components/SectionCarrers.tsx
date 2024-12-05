
export function SectionCareers() {
    return (
        <section className="relative w-full flex items-center justify-center h-full bg-back-green" id="Careers">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto py-5">
                <div className="max-w-[1200px] mx-auto pt-12 lg:pt-24 text-center pb-12">
                    <h2 className="text-primary-gray text-[32px] lg:text-[40px] font-bold leading-tight mb-6">
                        Trabalhe Conosco
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-10">
                        Faça parte da nossa equipe e contribua para o sucesso de nossa missão. Buscamos talentos dedicados e apaixonados pelo que fazem.
                    </p>
                  
                    {/* Botão para aplicação */}
                    <div className="mt-8">
                        <a 
                            href="https://wa.me/5548996864536" 
                            className="bg-primary-green text-white py-3 px-8 rounded-3xl text-lg font-bold hover:bg-light-green transition-all">
                            Envie seu Currículo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
