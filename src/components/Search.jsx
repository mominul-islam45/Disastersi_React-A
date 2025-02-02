import React from "react";
import Container from "./common/container";
import Title from "./common/Title";
import Button from "./common/Button";

const Search = ({breadcrumb, title, buttonIcon, button, buttonOnClick}) => {
  return (
    <>
      <div className="bg-light-v2 py-5">
        <Container className="flex items-center justify-between">
            <div className=" space-y-3">
                <p className="text-xs text-gray">{breadcrumb}</p>
                <Title>{title}</Title>
            </div>

            <div className="flex gap-3">
                <div className="relative">
                    <input type="search" placeholder="Search incident" className="w-[190px] ps-8 p-2 bg-light rounded-[6px] search-bar placeholder:text-xs  border border-gray/15 outline-0 focus:border-orange/50 hover:border-gray/60 transition-all"/>
                    <img src="./icons/search.svg" alt="" className=" absolute top-[11px] left-[8px]"/>
                </div>
                <button className=" px-[10px] py-[12px] text-xs text-gray bg-light rounded-[6px] cursor-pointer border border-gray/15 outline-0 focus:border-orange/50 hover:border-gray/60 transition-all">Sort By: Date modified</button>
                <Button onClick={buttonOnClick} className="flex">
                    <img src={buttonIcon} className="pr-1"/>{button}
                </Button>
            </div>
        </Container>
      </div>
    </>
  );
};

export default Search;
