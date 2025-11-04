import { Card } from "@/components/ui/card";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export default function Sobre() {
  return (
    <div className="p-2">
      <Card className="min-h-135 p-2">
        <h1 className="text-amber-50 text-4xl p-4">Sobre mim</h1>
        <h2 className="text-amber-50 px-4 m-0">
          Desenvolvedor Full Stack & Estudante de Sistemas de Informação
        </h2>
        <p className="text-amber-50 px-4">
          Olá, sou Carlos, desenvolvedor Full Stack e estudante de
          Sistemas de Informação na UFRPE. Minha paixão é construir aplicações
          web completas, do frontend ao backend. Participei do programa
          Desenvolve, onde ganhei experiência prática em projetos colaborativos.
          Minhas principais tecnologias são React, Next.js, TypeScript, Java,
          Python e MySQL. Estou buscando minha próxima oportunidade para aplicar
          e expandir meu conhecimento.
        </p>
        <div>
          <h2 className="px-4">visite minhas redes sociais:</h2>
          <ul className="text-amber-50 px-4 flex flex-row gap-2">
            <li>
              <a
                href="https://github.com/htu6n7yi"
                target="_blank"
                className="flex flex-row max-w-20 rounded gap-2 border p-1"
              >
                GitHub <SiGithub className="mt-1" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carlos-cavalcanti-/"
                target="_blank"
                className="flex flex-row max-w-23 rounded gap-2 border p-1"
              >
                LinkedIn <SiLinkedin className="mt-1" />
              </a>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
