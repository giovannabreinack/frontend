import './Cadastro.css'

function Cadastro() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
                <div className="fundoCadastro hidden lg:block"></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
                    <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="fullName">Nome Completo</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Nome Completo"
                            className="border-2 border-slate-700 rounded p-2"

                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="CPF"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="birthDate">Data de Nascimento:</label>
                        <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            placeholder="Data de Nascimento"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder="Telefone"
                            className="border-2 border-slate-700 rounded p-2"
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button
                            type='reset'
                            className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2'
                        >
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='rounded text-white bg-teal-600
                           hover:bg-teal-600 w-1/2 py-2
                           flex justify-center'
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro