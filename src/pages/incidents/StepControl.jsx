import React from "react";
import Title from "../../components/common/Title";
import Container from "../../components/common/container";
import Button from "../../components/common/Button";
import { cn } from "../../lib/utility/cn";

const StepControl = ({ stepProgressStyle, prevStep, next, nextStep }) => {
  return (
    <>
      <div className="bg-light py-5">
        <Container className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Close Button */}
            <button className="size-[40px] rounded-full bg-white border border-gray/30 flex justify-center items-center group hover:border-orange/40 cursor-pointer hover:scale-110 transition-all">
              <svg className="stroke-gray group-hover:stroke-orange transition-all active:stroke-gray"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_707)">
                  <path
                    d="M14.9067 6.09467L6.56074 14.4407"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.56104 6.09467L14.907 14.4407"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_707">
                    <rect
                      width="20.2338"
                      height="20.2338"
                      fill="white"
                      transform="translate(0.616699 0.149353)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className=" space-y-3">
              <p className="text-xs text-gray">
                Home - Incidents - New Incident
              </p>
              <Title>New Incident</Title>
            </div>
          </div>

          {/* Step progress bar */}
          <div className="w-full lg:w-[350px] xl:w-[525px] h-[5px] rounded-[10px] bg-light-v2 order-1 lg:order-0">
            <div className={cn("w-0 h-full rounded-[10px] bg-orange", stepProgressStyle)}></div>
          </div>

          <div className="flex gap-4 justify-between py-5 lg:py-0">
            {/*Step Back Button */}
            <Button onClick={prevStep} className="text-dark border border-gray/30 bg-white hover:border-orange/40 hover:bg-white active:bg-light-v2 w-[110px]">
              Back
            </Button>
            {/* Step Next Button */}
            <Button onClick={nextStep}>{next}</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default StepControl;
