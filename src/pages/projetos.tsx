import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiGithub, SiRocket } from "react-icons/si";

const Projetos = () => {
  const dataProjetos = [
    {
      title: "gerador de currículo",
      image: "/src/assets/gerador-curriculo.png",
      deploy: "#",
      repositorio: "#",
    },
    {
      title: "Litera",
      image: "/src/assets/litera.jpeg",
      deploy: "#",
      repositorio: "#",
    },
    {
      title: "roadmap de estudos",
      image: "/src/assets/roadmap.jpeg",
      deploy: "github.com",
      repositorio: "#",
    },
    {
      title: "Projeto 3",
      image: "Descrição do Projeto 3",
      deploy: "github.com",
      repositorio: "#",
    },
    {
      title: "Projeto 3",
      image: "/src/assets/projeto3.png",
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
            className="p-4 min-h-45 gap-0 flex justify-between text-center"
          >
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-3 gap-2 min-h-20 ">
              <img src={p.image} className="object-cover h-5/7 rounded p-0 w-full mt-2" alt="" />
            </CardContent>
            <CardFooter>
              <CardAction>
                <a href={p.deploy} className="flex flex-row gap-2">
                  <SiGithub size={35} className="border-b border-r rounded border-blue-400 p-1"/> 
                  <SiRocket size={35} className="border-b border-r rounded border-blue-400 p-1" />
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
