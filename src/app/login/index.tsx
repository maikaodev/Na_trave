import NaTraveLogo from '../../assets//logo/logo-fundo-branco.jpg';
import { InputText } from '../../components/inputText';

export const Login = () => {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <div className=" absolute top-10 border-b-2 w-full flex justify-center items-center pb-10">
        <img src={NaTraveLogo} alt="Logo" />
      </div>

      <form className="flex flex-col space-y-4 my-4">
        <InputText label="Nome" placeholder="Digite seu nome" />
        <InputText label="Usuário" placeholder="Digite seu usuário" />
        <InputText label="E-mail" placeholder="Digite seu e-mail" />
        <InputText label="Senha" placeholder="Digite sua senha" />
        <button
          className="bg-red-500 w-80 rounded-md px-6 py-4 text-white font-bold"
          type="submit"
        >
          Criar minha conta
        </button>
      </form>
    </main>
  );
};

