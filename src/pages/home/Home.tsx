function Home() {
    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
            style={{
                backgroundImage: "url('https://ik.imagekit.io/zddqh4rhi/agricultor.jpg?updatedAt=1753565544718')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 text-center flex flex-col items-center gap-6 max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold">Bem-Vindo!</h2>
                <p className="text-lg md:text-2xl">
                    Gerencie o cadastro de agricultores de forma prática.
                </p>
                <div className="mt-4 rounded border-2 border-teal-300 px-6 py-3 cursor-pointer hover:bg-teal-600 hover:text-white transition">
                    Cadastrar
                </div>
            </div>
        </div>
    );
}


export default Home;

