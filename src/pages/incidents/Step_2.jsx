import React from 'react'
// Svg's imported as component using SVGR
import Avalanche from '../../../public/icons/incidentType/avalanche.svg?react'
import Biological from '../../../public/icons/incidentType/biological.svg?react'
import Blizzard from '../../../public/icons/incidentType/blizzard.svg?react'
import Cold from '../../../public/icons/incidentType/cold.svg?react'
import Drought from '../../../public/icons/incidentType/drought.svg?react'
import Earthquake from '../../../public/icons/incidentType/earthquake.svg?react'
import Flooding from '../../../public/icons/incidentType/flooding.svg?react'
import Heat_Wave from '../../../public/icons/incidentType/heat_wave.svg?react'
import Hail from '../../../public/icons/incidentType/hail.svg?react'
import Lightning from '../../../public/icons/incidentType/lightning.svg?react'
import Man_Made from '../../../public/icons/incidentType/man_made.svg?react'
import Mudslide from '../../../public/icons/incidentType/mudslide.svg?react'
import Severe_Storm from '../../../public/icons/incidentType/severe_storm.svg?react'
import Strong_Wind from '../../../public/icons/incidentType/severe_storm.svg?react'
import Tornado from '../../../public/icons/incidentType/tornado.svg?react'
import Tsunami from '../../../public/icons/incidentType/tsunami.svg?react'
import Volcanic_Eruption from '../../../public/icons/incidentType/volcanic_eruption.svg?react'
import Wildfire from '../../../public/icons/incidentType/wildfire.svg?react'

import Container from "../../components/common/container";
import Title from '../../components/common/Title'

const Step_2 = () => {

  const incidentTypes = [
      {
          icon: <Avalanche className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Avalanche'
      },
      {
          icon: <Biological className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Biological'
      },
      {
          icon: <Blizzard className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Blizzard'
      },
      {
          icon: <Cold className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Cold/Freezing'
      },
      {
          icon: <Drought className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Drought'
      },
      {
          icon: <Earthquake className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Earthquake'
      },
      {
          icon: <Flooding className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Flooding'
      },
      {
          icon: <Heat_Wave className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Heat Wave'
      },
      {
          icon: <Hail className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Hail'
      },
      {
          icon: <Lightning className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Lightning'
      },
      {
          icon: <Man_Made className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Man Made'
      },
      {
          icon: <Mudslide className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Mudslide'
      },
      {
          icon: <Severe_Storm className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Severe Storm'
      },
      {
          icon: <Strong_Wind className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Strong Wind'
      },
      {
          icon: <Tornado className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Tornado'
      },
      {
          icon: <Tsunami className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Tsunami'
      },
      {
          icon: <Volcanic_Eruption className="group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Volcanic Eruption'
      },
      {
          icon: <Wildfire className=" group-hover:fill-light group-hover:stroke-light transition-colors"/>,
          text: 'Wildfire'
      },
  ];

  return (
    <>
      <Container className='max-w-[760px] 2xl:max-w-[900px]'>
        <Title className='pt-8 pb-6 text-[20px] md:text-[24px]'>Which of these best describes the incident?</Title>
        <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px]'>
          {incidentTypes.map(({icon, text}, i)=>(
            <div key={i} className='py-[22px] px-[16px] sm:px-[20px] bg-light border border-light-v2 rounded-[10px] flex gap-[10px] items-center cursor-pointer group hover:bg-orange transition-colors'>
              {icon}
              <p className='text-gray text-sm group-hover:text-light'>{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

export default Step_2