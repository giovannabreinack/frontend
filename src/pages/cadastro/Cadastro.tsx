import './Cadastro.css';

function Cadastro() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
            <div className="fundoCadastro hidden lg:block"></div>

            <div className="flex justify-center items-center bg-white shadow-lg h-full">
                <form className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-6">
                    <h2 className="text-4xl font-extrabold text-teal-600 text-center">Crie sua conta</h2>

                    <div className="flex flex-col">
                        <label htmlFor="fullName" className="text-slate-700 font-medium">Nome Completo</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Seu nome completo"
                            className="mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="cpf" className="text-slate-700 font-medium">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="Seu CPF"
                            className="mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="birthDate" className="text-slate-700 font-medium">Data de Nascimento</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            className="mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-slate-700 font-medium">Telefone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="(00) 00000-0000"
                            className="mt-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                    <div className="flex justify-between gap-4 pt-4">
                        <button
                            type="reset"
                            className="w-1/2 py-3 bg-gray-300 hover:bg-gray-400 text-slate-800 font-semibold rounded-lg transition duration-200"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition duration-200"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
