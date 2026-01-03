import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // Não precisamos dos hooks aqui, apenas dos componentes
} from "@/components/ui/carousel";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

// Vamos criar um array para os ícones, tornando o código mais limpo (opcional, mas recomendado)
const technologies = [
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind" },
  { icon: SiReact, color: "#61DAFB", name: "React" },
  { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
  { icon: SiCss3, color: "#1572B6", name: "CSS3" },
  { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
  { icon: SiAngular, color: "#DD1B16", name: "Angular" },
  { icon: DiJava, color: "#007396", name: "Java" },
  { icon: SiMysql, color: "#4479A1", name: "MySQL" },
  { icon: SiPython, color: "#3776AB", name: "Python" },
];

export function CarouselSpacing() {
  return (
    <div className="w-full">
      {/* PASSO 1: Adicionar o plugin de Autoplay e a opção 'loop: true'.
        - 'plugins' ativa a rolagem automática.
        - 'opts={{ loop: true }}' faz o carrossel voltar ao início após o último item.
      */}
      <Carousel
        className=""
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000, // Tempo em milissegundos (2 segundos)
            stopOnInteraction: false, // Continua tocando mesmo após interação manual
          }),
        ]}
      >
      
        <CarouselContent className="-ml-1 ">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div className="flex flex-wrap ">
                <CarouselItem
                  key={index}
                  className="p-3"
                >
                  <Card className="shadow-sky-600">
                    <CardContent className="flex flex-col items-center justify-center lg:min-w-[120px] min-w-[80px]">
                      <IconComponent size={35} color={tech.color} />
                      <span className="text-sm">{tech.name}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </div>
            );
          })}
        </CarouselContent>

        {/* O footer deve ficar fora do CarouselContent */}
        <footer className="mt-4">
          <p className="text-center text-white">
            © 202 José Carlos Cavalcanti
          </p>
        </footer>
      </Carousel>
    </div>
  );
}
export default CarouselSpacing;
