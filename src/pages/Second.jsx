import Card from "@/components/Card";
import React from "react";
import img from "../assets/Card1.png";
import img2 from "../assets/Card2.png";
import img3 from "../assets/Card3.png";
import img4 from "../assets/Card4.png";
import img5 from "../assets/Card5.png";
import img6 from "../assets/Card6.png";

const cardData = [
  {
    img: img,
    title: "Faster Results",
    content:
      "Get passport information in seconds, making your processes quicker and easier",
  },
  {
    img: img2,
    title: "High Accuracy",
    bgcolour: "bg-[#F9F8FE]",
    content:
      "Instantly process passports of over 130 countries with increased accuracy to serve more clients.",
  },
  {
    img: img3,
    title: "Easy Data Capture",
    content:
      "Scan documents, images, PDFs,s and other documents from numerous sources including cloud storage, no matter the format.",
  },
  {
    img: img4,
    title: "Simple Integration",
    content:
      "Pixl OCR can be integrated into your current system seamlessly through API and SDK.",
  },
  {
    img: img5,
    title: "Save Time and Money",
    content:
      "Minimize the repetitive time spent in work to avoid wastage of time, energy, and Spare and save money from possible errors.",
  },
  {
    img: img6,
    title: "Automated Workflows",
    content:
      "Make your operations smoother by automating tasks like file imports, data checks, and exports.",
  },
];
function Second() {
  return (
    <div className="flex flex-col px-4 md:px-16 gap-10 max-w-screen-2xl mx-auto">
      <div className="flex flex-col ml-[2px] gap-1">
        <h1 className="font-Manrope font-semibold  text-[24px] md:text-[28px] xl:text-[40px] 2xl:text-5xl text-[#000000] leading-none">
          Why Choose
        </h1>
        <h1 className="font-Manrope font-semibold text-[24px] md:text-[28px] xl:text-[40px] 2xl:text-5xl text-[#695FD9] leading-none">
          Pixl Passport SDK?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            bgcolour={card.bgcolour}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Second;
