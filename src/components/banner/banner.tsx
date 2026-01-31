import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import image from "/src/assets/banner.png";
import bgImage from "@/assets/litera.jpeg";

export function Banner() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-slate-900">
      {/* Background com imagem diagonal */}
      <div 
        className="absolute inset-0 -z-20 opacity-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'skewY(-6deg)',
          transformOrigin: 'top left',
          scale: '1.2',
        }}
      />
      
      {/* Overlay gradiente para contraste */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/85" />

      {/* Container principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Coluna ESQUERDA - Conteúdo textual */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            
            {/* Saudação */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-light animate-fade-in">
              Seja Bem-Vindo ao meu Portfólio
            </p>
            
            {/* Nome principal */}
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight animate-fade-in-delay-1">
              Sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Carlos</span>
            </h1>
            
            {/* Subtítulo profissional */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-light animate-fade-in-delay-2">
              Desenvolvedor de Software
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-delay-3">
              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-slate-700/40 hover:bg-slate-600/60 border-2 border-blue-600/50 hover:border-blue-500 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 font-medium"
              >
                Saiba Mais
              </Button>

              <Button
                size="lg"
                className="px-8 py-6 text-lg bg-blue-600/30 hover:bg-blue-600/50 border-2 border-blue-600 hover:border-blue-400 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/20 font-medium"
              >
                Ver Projetos
              </Button>
            </div>
          </div>

          {/* Coluna DIREITA - Imagem */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-delay-2 lg:min-h-[600px]">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-full">
              {/* Card com a imagem */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 border-2 border-slate-700/50 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-900/30 h-full">
                <img
                  src={image}
                  alt="Carlos - Desenvolvedor de Software"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Elementos decorativos ao redor da imagem */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>

        </div>
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-slate-600/5 rounded-full blur-3xl -z-10 animate-pulse-slow hidden lg:block" style={{ animationDelay: '1s' }} />
    </section>
  );
}

export default Banner;