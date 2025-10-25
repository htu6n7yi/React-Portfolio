import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiNextdotjs, SiAngular, SiMysql, SiPython} from "react-icons/si";
import { DiJava } from "react-icons/di";

export function CarouselSpacing() {
  return (
    <div className="w-full">
      <Carousel className="">
        <CarouselContent className="-ml-1 max-h-40">
          <CarouselItem className="w-full p-4 flex flex-row ">
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiTypescript size={25} color="#3178C6"/> TypeScript </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiTailwindcss size={25} color="#38B2AC"/> Tailwind </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiReact size={25} color="#61DAFB"/> React </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiJavascript size={25} color="#F7DF1E"/> JavaScript </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiHtml5 size={25} color="#E34F26"/> HTML5 </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiCss3 size={25} color="#1572B6"/> CSS3 </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiNextdotjs size={25} color="#000000"/> Next.js </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiAngular size={25} color="#DD1B16"/> Angular </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <DiJava size={25} color="#007396"/> Java </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiMysql size={25} color="#4479A1"/> MySQL </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiPython size={25} color="#3776AB"/> Python </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <footer >
        <p className="text-center text-white">© 2025 José Carlos Cavalcanti</p>
      </footer>
      </Carousel>
    </div>
  );
}
export default CarouselSpacing;
