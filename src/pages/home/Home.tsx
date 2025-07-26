function Home() {
    return (
        <div
            className="bg-neutral-50 flex justify-center relative"
            style={{
                backgroundImage: "url('https://ik.imagekit.io/zddqh4rhi/agricultor.jpg?updatedAt=1753565544718')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

            <div className="container grid grid-cols-2 text-white z-10 py-12">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-4xl font-bold">
                        Bem-Vindo!
                    </h2>
                    <p className="text-xl">
                        Gerencie o cadastro de agricultores de forma prática.
                    </p>

                    <div className="flex justify-around gap-4">
                        <div className="rounded border-teal-300 border-solid border-2 py-2 px-4">
                            Cadastrar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

