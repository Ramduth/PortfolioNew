import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import icon2 from "../assets/icon2.png";
import icon1 from "../assets/icon1.png";
import Capa1 from "../assets/Capa1.png";

// Sample data for the cards
const cardData = [
  {
    title: "Mobile SDK",
    description: "Seamless integration into mobile apps.",
    icon: <img src={icon1} className="w-[32.46px] h-[32.46px] object-cover text-white text-opacity-80" />,
  },
  {
    title: "Offline Data Processing",
    description: "Works without an internet connection.",
    icon: <img src={icon2} className="w-[32.46px] h-[32.46px] object-cover text-white text-opacity-80" />,
  },
  {
    title: "Document Database Comparison",
    description: "Seamless integration into mobile apps.",
    icon: <img src={icon2} className="w-[32.46px] h-[32.46px] object-cover text-white text-opacity-80" />,
  },
  {
    title: "API",
    description: "Comprehensive API for advanced use cases.",
    icon: <img src={icon1} className="w-[32.46px] h-[32.46px] object-cover text-white text-opacity-80" />,
  },
  {
    title: "IoT SDK",
    description: "Seamless integration for IoT devices.",
    icon: <img src={icon2} className="w-[32.46px] h-[32.46px] object-cover text-white text-opacity-80" />,
  },
];

function Four() {
  return (
    <div className="w-full flex px-4 md:px-16 max-w-screen-2xl mx-auto overflow-hidden">
      <div className="border flex flex-col gap-10 relative rounded-3xl p-8 lg:p-16 pb-6  bg-[#695FD9] lg:h-[90vh] xl:h-[80vh] 2xl:h-auto w-full">
        <div className="font-semibold text-[24px] z-50 md:text-[28px] xl:text-[40px] 2xl:[48px] font-Manrope text-[#FFFFFF]">
        <h1>Key Features of </h1>
        Passport SDK.
        </div>
        <Carousel opts={{ align: "start" }} className="w-full z-50">
          <CarouselContent>
            {cardData.map((card, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 flex flex-col"
              >
                <div className="flex flex-col h-full">
                <Card className="!bg-none !border border-[#FFFFFF1A] w-full h-full">
                    <CardContent className="bg-[#FFFFFF1A] backdrop-blur-[34.2px] rounded-[8px] p-4 flex flex-col  justify-between h-full gap-14">
                      <div>{card.icon}</div>
                      <div className="flex flex-col gap-0.2 ">
                      <h1 className="text-[18px] md:text-[20px] xl:text-[24px] font-Manrope font-medium text-white text-opacity-80">
                          {card.title}
                        </h1>
                        <p className="font-Manrope text-xs md:text-sm text-white text-opacity-80 mt-auto">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute top-1 left-1 w-full">
            <img src={Capa1} className="h-[37vh] w-full md:h-[80vh]  lg:h-[70vh] xl:h-[60vh] 2xl:h-[45vh]"/>
        </div>
      </div>
    </div>
  );
}

export default Four;
