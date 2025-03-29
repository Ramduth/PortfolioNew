import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Passport from "../assets/PassPort.png";

function Third() {
  // Sample data for the accordion
  const accordionData = [
    {
      title: "NFC-Based Document Verification",
      content:
        "Our Passport SDK enables the checking of the authenticity and genuineness of e-Passports, e-IDs, e-DLs, and other electronic documents with an NFC technology feature. This advanced NFC technology provides real-time validation, ensuring high-level security for document verification. It also simplifies the authentication process, making it more efficient.",
    },
    {
      title: "MRZ Reading and Validation",
      content: "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      title: "Advanced Document Capture",
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      title: "Automatic Document Type Detection",
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      title: "Document Liveness",
      content: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  return (
    <div className="bg-[#F7F7FD] py-15 flex flex-col gap-12  md:px-16 max-w-screen-2xl mx-auto">
      
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[24px] md:text-[28px] xl:text-[40px] 2xl:[48px] font-semibold font-Manrope leading-none">
          Authentication of
        </h1>
        <h1 className="text-[24px] md:text-[28px] xl:text-[40px] 2xl:[48px] font-semibold font-Manrope text-[#695FD9] leading-none">
          Identity Documents
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="rounded-[13.39px] bg-[#FFFFFF] p-4">
          <img src={Passport} alt="Passport" className="h-70 w-full lg:h-90 lg:w-200" />
        </div>
        <div className="rounded-[13.39px] bg-[#FFFFFF] w-full p-4">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-[380px] md:w-full p-4">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-[16px] lg:!text-lg  2xl:text-[20px] font-medium font-Manrope">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm  text-[#6F6F6F] font-Manrope">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Third;
