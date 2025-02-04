import React from "react";
import Title from "./Title";

const Card = ({tagIcon, tag, img, title, address, cost}) => {
  return (
    <>
      {/* Card */}
      <div className="relative">
        {/* Blizzard */}
        <div className="flex gap-[5px] rounded-full p-[10px] group cursor-pointer bg-light w-fit absolute top-[10px] right-[10px] z-30">
          <img src={tagIcon} />
          <h4 className="text-xs font-bold group-hover:text-orange-600 transition-colors">
            {tag}
          </h4>
        </div>

        {/* Card Image */}
        <div className="rounded-[10px] overflow-clip mb-4">
          <img
            src={img}
            alt="Image"
            className=" aspect-[3/2] rounded-[10px] hover:scale-125 transition-all duration-500 cursor-pointer"
          />
        </div>

        <Title className="text-base w-fit hover:cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-2 hover:decoration-dark">
          {title}
        </Title>
        <p className="text-[14px] text-gray py-1.5">{address}</p>
        <Title className="text-base">{cost}</Title>
      </div>
    </>
  );
};

export default Card;
