import React from "react";

const Search_field = ({placeholder}) => {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder={placeholder}
        className="w-[150px] md:w-[190px] ps-8 p-2 bg-light rounded-[6px] search-bar placeholder:text-xs  border border-gray/15 outline-0 focus:border-orange/50 hover:border-gray/60 transition-all"
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
