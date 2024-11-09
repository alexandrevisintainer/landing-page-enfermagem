export function SectionContact() {
    return (
        <section className="relative w-full flex items-center justify-center min-h-screen" id="Contact">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="max-w-[600px] mx-auto pt-12 lg:pt-24 text-center">
                        <span className="block text-primary-gray text-sm font-bold uppercase mb-6">Contato</span>
                        <h2 className="text-primary-blue text-[32px] lg:text-[40px] font-bold leading-tight mb-6">
                            Entre em Contato Conosco
                        </h2>
                        <p className="text-txt-gray text-lg mb-6">
                            Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível. Estamos prontos para atender suas necessidades e fornecer todas as informações necessárias.
                        </p>
                        
                        {/* Formulário de Contato */}
                        <form className="flex flex-col gap-4">
                            <input 
                                type="text" 
                                placeholder="Nome" 
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            />
                            <input 
                                type="email" 
                                placeholder="E-mail" 
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            />
                            <input 
                                type="tel" 
                                placeholder="Telefone" 
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                            />
                            <textarea 
                                placeholder="Sua Mensagem" 
                                rows={4} 
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            ></textarea>
                            <button 
                                type="submit" 
                                className="mb-6 px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-dark transition duration-200 font-bold"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
