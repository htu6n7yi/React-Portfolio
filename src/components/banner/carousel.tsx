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
    <div className="">
      <Carousel>
        <CarouselContent className="-ml-1">
          <CarouselItem className="w-full p-4 flex flex-row">
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiTypescript size={50} color="#3178C6"/> TypeScript </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiTailwindcss size={50} color="#38B2AC"/> Tailwind </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiReact size={50} color="#61DAFB"/> React </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiJavascript size={50} color="#F7DF1E"/> JavaScript </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiHtml5 size={50} color="#E34F26"/> HTML5 </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiCss3 size={50} color="#1572B6"/> CSS3 </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiNextdotjs size={50} color="#000000"/> Next.js </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiAngular size={50} color="#DD1B16"/> Angular </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <DiJava size={50} color="#007396"/> Java </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiMysql size={50} color="#4479A1"/> MySQL </CardContent>
            </Card>
            <Card className="shadow-sky-600">
              <CardContent className="flex flex-col items-center"> <SiPython size={50} color="#3776AB"/> Python </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default CarouselSpacing;
