import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiGithub, SiRocket } from "react-icons/si";
import gerador from "../assets/gerador-curriculo.png";
import litera from "../assets/litera.jpeg";
import roadmap from "../assets/roadmap.jpeg";

const Projetos = () => {
  const dataProjetos = [
    {
      title: "gerador de currículo",
      image: gerador,
      deploy: "https://projeto-8-gerador-curriculo.vercel.app/",
      repositorio: "https://github.com/htu6n7yi/projeto-8-gerador-curriculo/tree/main",
    },
    {
      title: "Litera",
      image: litera,
      deploy: "https://litera-six.vercel.app/",
      repositorio: "https://github.com/htu6n7yi/litera",
    },
    {
      title: "roadmap de estudos",
      image: roadmap,
      deploy: "https://projeto-7-green.vercel.app/",
      repositorio: "https://github.com/htu6n7yi/projeto-7/tree/main",
    },
  ];

  return (
    <div>
      <h1 className="text-amber-50 text-4xl p-4">Projetos</h1>
      <div className="p-2 gap-4 grid grid-cols-2">
        {dataProjetos.map((p) => (
          <Card
            key={p.title}
            className="p-4 min-h-45 gap-0 flex justify-between text-center shadow-blue-400 "
          >
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-3 gap-2 min-h-20 ">
              <img src={p.image} className="object-cover h-5/7 rounded p-0 w-full mt-2" alt="" />
            </CardContent>
            <CardFooter>
              <CardAction className="flex flex-row gap-2">
                <a href={p.repositorio}>
                  <SiGithub size={35} className="border-b border-r rounded border-blue-400 p-1"/> 
                </a>
                <a href={p.deploy}>
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
