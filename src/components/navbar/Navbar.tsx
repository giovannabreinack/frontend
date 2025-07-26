function Navbar() {
    return (
        <header className="w-full bg-teal-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-wide">
                    Desafio<span className="text-teal-200">Dev</span>
                </h1>
                <nav className="flex gap-6 text-lg">
                    {['Cadastrar', 'Atualizar', 'Excluir', 'Procurar'].map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="hover:text-teal-200 transition-colors duration-200 font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
