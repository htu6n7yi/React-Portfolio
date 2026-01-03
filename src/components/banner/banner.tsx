import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import image from "/src/assets/banner.png";
// Importe sua imagem de fundo aqui:
import bgImage from "@/assets/litera.jpeg";

export function Banner() {
  return (
    <div className="relative p-4 text-amber-100 flex flex-col lg:flex-row lg:justify-evenly overflow-hidden">
      {/* Background diagonal com sua imagem personalizada */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'skewY(-6deg)',
          transformOrigin: 'top left',
          scale: '1.2',
          opacity: '0.15'
        }}
      />
      
      {/* Overlay para melhorar contraste */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/50 to-transparent" />

      <div className="mt-4 relative z-10">
        <Card className="bg-transparent shadow-transparent">
          <CardHeader className="lg:min-w-lg">
            <CardDescription className="text-4xl text-slate-400">
              Seja Bem-Vindo ao meu Portfólio
            </CardDescription>
            <CardTitle className="font-bold text-5xl pl-12 text-slate-100">
              Sou Carlos
            </CardTitle>
            <CardDescription className="text-4xl text-slate-400">
              Desenvolvedor de Software
            </CardDescription>

            <div className="grid grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
              <div className="col-span-2 text-right">
                <Button
                  className="mt-4 inline-flex bg-slate-500/20 hover:bg-slate-700/20 border-slate-600 border border-blue-600"
                >
                  Saiba Mais
                </Button>
              </div>

              <div className="col-span-2 text-left">
                <Button
                  variant={"default"}
                  className="mt-4 w-4/6 bg-slate-500/20 hover:bg-slate-700/20 border-blue-600 border"
                >
                  Ver Projetos
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-65 lg:mt-0 relative z-10">
        <Card className="max-h-85 p-0 bg-slate-800">
          <img
            className="object-cover max-h-85 p-0 w-full"
            src={image}
            alt="Banner"
          />
        </Card>
      </div>
    </div>
  );
}

export default Banner;