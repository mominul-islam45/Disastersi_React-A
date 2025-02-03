import React from "react";
import Container from "../../components/common/container";
import Title from "../../components/common/Title";
import { addIncidentSteps } from "../../lib/db/addIncidentSteps";
import Button from "../../components/common/Button";

const Step_1AddIncident = ({onGetStart}) => {
  return (
    <>
      <Container className='flex flex-col justify-center items-center'>
        <div className="text-center max-w-[500px] pb-5">
          <Title className="sm:text-[32px] pt-10 pb-4">Let’s get started</Title>
          <p className=" leading-normal sm:leading-[26px]">
            Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
            general sac mascho werhoLorem ipsum dolar sit gene
          </p>
        </div>
        {/* Disabled Step progress bar */}
        <div className="hidden lg:block relative w-[600px] mb-8">
          {/* line */}
          <div className="absolute top-[14px] h-[3px] w-full bg-light-v2"></div>
          {/* Dots */}
          <div className="flex justify-between">
            <div className="size-[29px] rounded-full bg-light-v2"></div>
            <div className="size-[29px] rounded-full bg-light-v2"></div>
            <div className="size-[29px] rounded-full bg-light-v2"></div>
          </div>
        </div>

        {/* Steps card */}
        <div className="flex flex-col lg:flex-row gap-[55px]">
            {addIncidentSteps.map(({icon, title, des}, i)=>(
                <div key={i} className="py-[25px] px-[20px] lg:w-[235px] rounded-[10px] border border-light-v2 hover:border-orange/40 transition-colors bg-light">
                    <img src={icon} alt="Icon" />
                    <Title className='text-[20px] pt-12 pb-4'>{title}</Title>
                    <p className="text-gray leading-[22px]">{des}</p>
                </div>
            ))}
        </div>
        <Button className='my-12' onClick={onGetStart}>Get started</Button>
      </Container>
    </>
  );
};

export default Step_1AddIncident;
