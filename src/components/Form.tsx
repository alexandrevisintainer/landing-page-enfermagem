export function SectionForm() {
    return (
        <section className="relative w-full flex items-center justify-center min-h-screen" id="Contact">
            <div className="w-full max-w-[1246px] px-[15px] mx-auto">
                <div>
                    <div className="max-w-[600px] mx-auto pt-12 lg:pt-24 text-left">
                        <span className="block text-primary-gray text-sm font-bold uppercase mb-6">Orçamento</span>
                        <h2 className="text-primary-blue text-[32px] lg:text-[40px] font-bold leading-tight mb-6">
                            Preencha o Formulário Abaixo e Receba um Orçamento em Poucos Minutos
                        </h2>
                        
                        {/* Formulário de Contato */}
                        <form className="flex flex-col gap-1">
                            <label htmlFor="nome" className="block text-primary-gray font-medium">Nome e sobrenome</label>
                            <input 
                                type="text" 
                                placeholder="Seu nome e sobrenome" 
                                className="px-4 py-3 border text-second-gray border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            />
                            <label htmlFor="nome" className="block text-primary-gray font-medium pt-2">Email</label>
                            <input 
                                type="email" 
                                placeholder=" Seu melhor Email" 
                                className="px-4 py-3 border text-second-gray border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            />
                            <label htmlFor="nome" className="block text-primary-gray pt-2 font-medium">Cidade e Bairro do Atendimento</label>
                            <input 
                                type="text" 
                                placeholder="Cidade e Bairro do Atendimento" 
                                className="px-4 py-3 border text-second-gray pt-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            />
                            <label htmlFor="nome" className="block text-primary-gray pt-2 font-medium">Estado</label>
                            <select 
                                className="px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            >
                                <option value="" disabled selected>Estado</option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>


                            <label htmlFor="nome" className="block text-primary-gray pt-2 font-medium">Seu Whatsapp</label>
                            <input 
                                type="tel" 
                                placeholder="Seu Whatsapp (Telefone)" 
                                className="px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            />
                            <label htmlFor="nome" className="block text-primary-gray pt-2 font-medium">Nome do paciente</label>
                            <input 
                                type="text" 
                                placeholder="Nome do paciente" 
                                className="px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            />
                            
                                
                            <label className="block mb-2 font-medium text-primary-gray pt-2">Quantas vezes na semana deseja atendimento?</label>
                            <select 
                                className="px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                                required
                            >
                                <option value="1" disabled selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                
                            </select>

                            <label className="block mb-2 font-medium text-primary-gray pt-2">Carga Horária desejada:</label>
                            <select 
    className="px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
    required
>
    <option value="" disabled selected>Selecione a duração</option>
    {Array.from({ length: 24 }, (_, i) => (
        <option key={i + 1} value={`${i + 1}h de Duração`}>{`${i + 1}h de Duração`}</option>
    ))}
</select>

                            
                            <div>
                                <label className="block mb-2 font-medium text-primary-gray pt-2">O paciente é:</label>
                                <div className="flex flex-col gap-2">
                                    <label>
                                        <input type="radio" name="dependencia" value="Parcialmente dependente" className="mr-2" required />
                                        Parcialmente dependente (pode realizar necessidades básicas por conta própria)
                                    </label>
                                    <label>
                                        <input type="radio" name="dependencia" value="Totalmente dependente" className="mr-2" />
                                        Totalmente dependente (precisa de auxílio na realização de tarefas básicas)
                                    </label>
                                    <label>
                                        <input type="radio" name="dependencia" value="Não é dependente" className="mr-2" />
                                        Não é dependente
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 font-medium text-primary-gray pt-2">Já contratou serviços de cuidados antes?</label>
                                <div className="flex gap-4">
                                    <label>
                                        <input type="radio" name="contratouServicos" value="Sim" className="mr-2" required /> Sim
                                    </label>
                                    <label>
                                        <input type="radio" name="contratouServicos" value="Não" className="mr-2" /> Não
                                    </label>
                                </div>
                            </div>
                            <textarea 
                                placeholder="Alguma Informação adicional?" 
                                rows={4} 
                                className="px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                            ></textarea>
                            <button 
                                type="submit" 
                                className="mb-6 mt-6 px-6 py-3 bg-primary-blue hover:bg-[#72e2d5]  text-white rounded-lg hover:bg-primary-dark transition duration-200 font-bold"
                            >
                                Enviar Formulário
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
