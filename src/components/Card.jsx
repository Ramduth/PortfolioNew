import React from "react";

function Card({ title, content, img, bgcolour }) {
  return (
    <div className="group">
      <div
        className={`flex flex-col h-full gap-6 rounded-[8px] ${bgcolour} p-6 
        transition-transform duration-300 ease-in-out transform hover:scale-90 hover:shadow-lg`}
      >
        <img
          src={img}
          alt=""
          className="h-12.5 w-12.5 transition-transform duration-300 group-hover:rotate-3"
        />
        <h1 className="font-Manrope font-medium lg:text-xl 2xl:text-2xl text-[#232325]">
          {title}
        </h1>
        <p className="font-Manrope text-xs md:text-sm 2xl:text-base text-[#6F6F6F]">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card;
