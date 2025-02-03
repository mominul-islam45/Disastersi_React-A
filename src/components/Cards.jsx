import React from "react";
import Container from "./common/container";
import { cards } from "../lib/db/cards";
import Title from "./common/Title";

const Cards = () => {
  return (
    <>
      {/* Cards */}
      <Container className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] ">
        {cards.map(({ img, title, address, cost }, i) => (
          <div key={i} className="relative">
            {/* Blizzard */}
            <div className="flex gap-[5px] rounded-full p-[10px] group cursor-pointer bg-light w-fit absolute top-[10px] right-[10px] z-30">
              <svg
                className="group-hover:fill-orange-600 transition-colors"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_170)">
                  <path
                    d="M15.9844 7.76604C15.9844 6.42304 15.0147 5.30211 13.7385 5.06695C13.7788 3.09316 11.859 1.56618 9.89069 2.15203C9.29473 0.890505 8.0172 0 6.50295 0C4.48565 0 2.83576 1.60436 2.76277 3.60419C1.17117 3.95064 0.0156555 5.3649 0.0156555 7.0175C0.0156555 8.94373 1.58259 10.5107 3.50881 10.5107H13.2398C14.753 10.5107 15.9844 9.27932 15.9844 7.76604Z"
                    fill=""
                  />
                  <path
                    d="M10.967 11.3106C10.7206 11.1874 10.4208 11.2872 10.2975 11.5338L9.29948 13.5299C9.13243 13.864 9.3787 14.2522 9.74545 14.2522C9.9285 14.2522 10.1047 14.1511 10.1922 13.9762L11.1902 11.9801C11.3134 11.7336 11.2135 11.4339 10.967 11.3106Z"
                    fill="#18181B"
                  />
                  <path
                    d="M15.4592 11.3106C15.2127 11.1874 14.9129 11.2872 14.7897 11.5338L13.7917 13.5299C13.6246 13.864 13.8709 14.2522 14.2376 14.2522C14.4207 14.2522 14.5969 14.1511 14.6844 13.9762L15.6824 11.9801C15.8056 11.7336 15.7057 11.4339 15.4592 11.3106Z"
                    fill="#18181B"
                  />
                  <path
                    d="M6.47679 11.3106C6.23034 11.1874 5.93052 11.2872 5.80729 11.5338L4.80925 13.5299C4.6422 13.864 4.88847 14.2522 5.25522 14.2522C5.43827 14.2522 5.61451 14.1511 5.70194 13.9762L6.69998 11.9801C6.82321 11.7336 6.72331 11.4339 6.47679 11.3106Z"
                    fill="#18181B"
                  />
                  <path
                    d="M1.98461 11.3106C1.73815 11.1874 1.43833 11.2872 1.3151 11.5338L0.317059 13.5299C0.150012 13.864 0.396279 14.2522 0.76303 14.2522C0.946077 14.2522 1.12233 14.1511 1.20975 13.9762L2.20779 11.9801C2.33102 11.7336 2.23112 11.4339 1.98461 11.3106Z"
                    fill="#18181B"
                  />
                  <path
                    d="M7.97289 13.0567C7.7264 12.9335 7.42661 13.0334 7.30339 13.2799L6.30534 15.276C6.13829 15.6101 6.38456 15.9983 6.75131 15.9983C6.93436 15.9983 7.11061 15.8972 7.19803 15.7223L8.19607 13.7262C8.3193 13.4797 8.2194 13.1799 7.97289 13.0567Z"
                    fill="#18181B"
                  />
                  <path
                    d="M12.4651 13.0567C12.2186 12.9335 11.9188 13.0334 11.7956 13.2799L10.7975 15.276C10.6305 15.6101 10.8767 15.9983 11.2435 15.9983C11.4265 15.9983 11.6028 15.8972 11.6902 15.7223L12.6883 13.7262C12.8115 13.4797 12.7116 13.1799 12.4651 13.0567Z"
                    fill="#18181B"
                  />
                  <path
                    d="M3.48265 13.0567C3.23617 12.9335 2.93638 13.0334 2.81315 13.2799L1.81511 15.276C1.64806 15.6101 1.89433 15.9983 2.26108 15.9983C2.44412 15.9983 2.62037 15.8972 2.7078 15.7223L3.70584 13.7262C3.82907 13.4797 3.72917 13.1799 3.48265 13.0567Z"
                    fill="#18181B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_170">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h4 className="text-xs font-bold group-hover:text-orange-600 transition-colors">
                Blizzard
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
        ))}
      </Container>
    </>
  );
};

export default Cards;
