import background_homepage from '../../assets/background-homepage.png';

export const Home = () => {
  return (
    <main className="bg-red-900 h-screen w-screen flex flex-col xl:flex-row justify-center items-center space-y-20 md:space-x-20">
      <img
        src={background_homepage}
        alt="Duas pessoas com camisa de time"
        className="w-80 md:w-1/2 max-w-[486px]"
      />
      <div className="w-80 md:w-1/2 max-w-[472px]">
        <h1 className="text-2xl xl:text-3xl font-bold text-white ">
          Dê o seu palpite na {<br />} Copa do Mundo do Catar 2022!{' '}
        </h1>

        <section className="flex flex-col space-y-4 mt-8 max-w-[472]">
          <a
            href="/signup"
            className="min-h-12 bg-white text-center hover:text-red-900 px-2 py-4 rounded-2xl text-red-900 font-bold hover:scale-105 duration-500 "
          >
            Criar minha conta
          </a>
          <a
            href="/login"
            className="min-h-12 bg-transparent text-center px-2 py-4 rounded-2xl text-white hover:text-white font-bold border-2 border-white hover:scale-105 duration-500"
          >
            Fazer login
          </a>
        </section>
      </div>

      <footer className="mt-10 absolute bottom-10">
        <span className="text-white">
          Desenvolvido por{' '}
          <a
            href="https://www.linkedin.com/in/maikaodev/"
            className="text-white hover:text-green-500 duration-500"
          >
            @maikaodev
          </a>
        </span>
      </footer>
    </main>
  );
};

