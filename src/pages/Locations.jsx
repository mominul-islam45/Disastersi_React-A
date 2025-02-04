import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import PlusIcon from "../../public/icons/plus.svg";
import Severe_Storm from '../../public/icons/incidentType/severe_storm.svg';
import Container from "../components/common/container";
import Title from "../components/common/Title";

const Locations = () => {
  return (
    <>
      <Navbar />
      {/* Search section - importing details through provs */}
      <Search
        breadcrumb="Incidents - DR-4699 March 2023 Severe Storms"
        titleIcon={Severe_Storm}
        title="DR-4699 March 2023 Severe Storms"
        button="New Location"
        buttonIcon={PlusIcon}
      />

      <Container className='py-8 flex flex-col md:flex-row-reverse gap-5'>
        {/* Location Map */}
        <div className="md:ps-5">
          <p className="text-gray text-xs">Incident Map</p>
          <div className=' rounded-[10px] overflow-clip my-4'>
            <img src="imgs/location.png" alt="Location" className=' cursor-pointer hover:scale-105 transition-all w-full object-cover'/>
          </div>
          <p className="text-gray text-xs">Start 19.1232, -118.233     End 19.3245, -119.2323</p>
        </div>


        {/* Location Details Container*/}
        <div className="space-y-5">

          {/* Location Details */}
          <div className="space-y-5">
            {/* Location */}
            <div className="flex items-center gap-2">
              <div className=" size-[37px] bg-light rounded-full flex justify-center items-center">
                <img src="icons/location_2.svg" />
              </div>
              <div>
                <p className="text-xs text-gray pb-1">Location</p>
                <Title className='text-[20px]'>Tulare County,  Los Angles, CA 23415</Title>
              </div>
            </div>
            {/* Cost */}
            <div className="flex items-center gap-2">
              <div className=" size-[37px] bg-light rounded-full flex justify-center items-center">
                <img src="icons/cost.svg" />
              </div>
              <div>
                <p className="text-xs text-gray pb-1">Approx. Cost:</p>
                <Title className='text-[20px]'>$60,607,456.00</Title>
              </div>
            </div>
            {/* Horizontal line */}
            <div className=" h-[1px] w-full bg-light-v2"></div>
            {/* Description */}
            <div>
              <p className="text-sm font-bold text-dark pb-1">Description</p>
              <p className="text-gray leading-[22px]">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
            </div>
          </div>

          {/* Horizontal line */}
          <div className=" h-[1px] w-full bg-light-v2"></div>
          {/* Locations Cards */}
          <div>

          </div>
        </div>
      </Container>
    </>
  );
};

export default Locations;
