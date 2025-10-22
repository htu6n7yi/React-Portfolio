import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "../ui/button";

export function Banner() {
  return (
    <div className="p-4 text-amber-100 h-full grid grid-cols-2 gap-2">
      <Card className="bg-transparent border-transparent shadow-transparent">
        <CardHeader>
          <CardDescription className="text-4xl text-slate-400"> Seja Bem-Vindo ao meu Portfólio </CardDescription>
          <CardTitle className="font-bold text-5xl font-bold pl-12 text-slate-100">
            Sou Carlos
          </CardTitle>
          <CardDescription className="text-4xl text-slate-400">Desenvolvedor de Software</CardDescription>

          <div className="grid grid-cols-2 gap-4">
            <Button className="mt-4 inline-flex bg-slate-500/20 hover:bg-slate-700/20 border-slate-600
            border border-blue-600
            "> Saiba Mais </Button>
            <Button variant={"default"} className="mt-4 w-3/6 bg-slate-500/20 hover:bg-slate-700/20 
            border-blue-600 border
            ">
              Ver Projetos{" "}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card className="max-h-80 bg-slate-800 border-slate-600">
        <img
          className="object-cover w-full h-full"
          src="https://thvnext.bing.com/th/id/OIP.68xL3uMB62-YYrAfPwVPPAHaEb?w=265&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3&ucfimg=1"
          alt=""
        />
      </Card>
    </div>
  );
}

export default Banner;
