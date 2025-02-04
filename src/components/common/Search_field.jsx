import React from "react";
import { cn } from "../../lib/utility/cn";

const Search_field = ({placeholder, className}) => {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder={placeholder}
        className={cn("w-[150px] md:w-[190px] py-2 ps-8 bg-light rounded-[6px] placeholder:text-xs  border border-gray/15 outline-0 focus:border-orange/50 hover:border-gray/60 transition-all", className)}
      />
      <img
        src="./icons/search.svg"
        alt="Search Icon"
        className=" absolute top-[11px] left-[8px]"
      />
    </div>
  );
};

export default Search_field;
