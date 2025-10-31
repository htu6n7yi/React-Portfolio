import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import image from "/src/assets/gemini.png";

// 1. Definimos uma interface para tipar as props que o Banner vai receber
interface BannerProps {
  onShowProjectsClick: () => void; // Informa que esperamos uma função
}

// 2. Recebemos a prop 'onShowProjectsClick' aqui
export function Banner({ onShowProjectsClick }: BannerProps) {
  return (
    <div className="p-4 text-amber-100 flex flex-col ">
      <div className="mt-4">
        <Card className="bg-transparent shadow-transparent ">
          <CardHeader>
            <CardDescription className="text-4xl text-slate-400">
              {" "}
              Seja Bem-Vindo ao meu Portfólio{" "}
            </CardDescription>
            <CardTitle className="font-bold text-5xl font-bold pl-12 text-slate-100">
              Sou Carlos
            </CardTitle>
            <CardDescription className="text-4xl text-slate-400">
              Desenvolvedor de Software
            </CardDescription>

            <div className="grid grid-cols-2 gap-4">
              <Button
                className="mt-4 inline-flex bg-slate-500/20 hover:bg-slate-700/20 border-slate-600
           border border-blue-600
          "
              >
                Saiba Mais
              </Button>
              <Button
                variant={"default"}
                className="mt-4 w-4/6 bg-slate-500/20 hover:bg-slate-700/20 
           border-blue-600 border 
          "
                // 3. Usamos a função recebida pela prop no evento onClick
                onClick={onShowProjectsClick}
              >
                Ver Projetos
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-65">
        <Card className="max-h-80 bg-slate-800">
          <img
            className="object-cover max-h-40"
            src={image}
            alt=""
          />
        </Card>
      </div>
    </div>
  );
}

export default Banner;