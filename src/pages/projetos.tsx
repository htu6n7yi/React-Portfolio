import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiGithub, SiRocket } from "react-icons/si";

const Projetos = () => {
  const dataProjetos = [
    {
      title: "gerador de currículo",
      description: "lorem ipsum dolor sit amet",
      deploy: "#",
      repositorio: "#",
    },
    {
      title: "Projeto 2",
      description: "Descrição do Projeto 2",
      deploy: "#",
      repositorio: "#",
    },
    {
      title: "Projeto 3",
      description: "Descrição do Projeto 3",
      deploy: "github.com",
      repositorio: "#",
    },
  ];

  return (
    <div>
      <h1 className="text-amber-50 text-4xl p-4">Projetos</h1>
      <div className="p-2 gap-4 grid grid-cols-2 ">
        {dataProjetos.map((p) => (
          <Card
            key={p.title}
            className="p-4 min-h-35 gap-0 flex justify-between"
          >
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="gap-2">
              <CardDescription>{p.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardAction>
                <a href={p.deploy} className="flex flex-row gap-2">
                  <SiGithub size={35} className="border rounded border-blue-400 p-1"/> 
                  <SiRocket size={35} className="border rounded border-blue-400 p-1" />
                </a>
              </CardAction>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
