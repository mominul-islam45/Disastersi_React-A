import React from "react";
import Container from "./common/container";
import Title from "./common/Title";
import Button from "./common/Button";
import Search_field from "./common/search_field";

const Search = ({breadcrumb, titleIcon, title, buttonIcon, button, buttonOnClick}) => {
  return (
    <>
      <div className="bg-light py-5">
        <Container className="flex items-center justify-between">
            <div className=" space-y-3">
                <p className="text-xs text-gray">{breadcrumb}</p>
                <Title className='flex gap-1'><img src={titleIcon}/>{title}</Title>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-end">
                {/* Search input */}
                <Search_field placeholder='Search incident' />
                {/* sort by - filter */}
                <button className=" px-[10px] py-[12px] text-xs text-gray bg-light rounded-[6px] cursor-pointer border border-gray/15 outline-0 focus:border-orange/50 hover:border-gray/60 transition-all">Sort By: Date modified</button>
                {/* Button */}
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
