import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Card } from "@/components/ui/card";

export default function Contato() {
  return (
    <div className="text-amber-50 p-2">
      <Card className="min-h-100">
        <h1 className="text-2xl font-bold">Contato</h1>
        <p>
          Estou ativamente buscando oportunidades de estágio ou como
          desenvolvedor júnior, onde eu possa aplicar meus conhecimentos em
          desenvolvimento Full Stack. Se você acredita que meu perfil se encaixa
          na sua equipe, ou se apenas quiser trocar uma ideia sobre tecnologia,
          vamos conversar?
        </p>
        <div className="p-2">
          {" "}
          <ul className=" px-4 flex flex-row gap-2">
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
            <li>
              <a
                href="mailto:jcavalcanti008@gmail.com"
                target="_blank"
                className="flex flex-row max-w-23 rounded gap-2 border p-1"
              >
                Email <SiGmail className="mt-1" />
              </a>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
