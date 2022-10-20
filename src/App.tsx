import "./styles/global.css";
import { Button } from "./components/Button/Button";
import { Logo } from "./components/Logo/Logo";
import { Heading } from "./components/Heading/Heading";
import { Text } from "./components/Text/Text";
import { TextInput } from "./components/Input/Input";
import { Check, Envelope, Lock } from "phosphor-react";
import { Checkbox } from "./components/Checkbox/Checkbox";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100">
      <header className="flex flex-col  items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ingite Lab
        </Heading>
        <Text size="lg" className="text-gray-700 m-1">
          Faça login e comece a suar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold"> Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope></Envelope>
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              placeholder="Digite seu e-mail"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-4">
          <Text className="font-semibold"> Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock></Lock>
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              placeholder="*********"
            ></TextInput.Input>
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2 mt-4">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type="submit" className="mt-8">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm">
          <a href="" className="text-gray-700 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm">
          <a href="" className="text-gray-700 underline  hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
