import React from 'react'
import Container from '../../components/common/container'
import Title from '../../components/common/Title'
import Search_field from '../../components/common/search_field'

const Step_4 = () => {
  return (
    <>
      {/* New incident Location */}
      <Container className='max-w-[760px] 2xl:max-w-[900px]'>
        <div className='lg:w-2/3'>
          <Title className='pt-6 pb-1 text-[20px] md:text-[24px]'>Where’s the incident?</Title>
          <p className='text-sm text-gray pb-5 leading-[22px]'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
        </div>
        {/* Location */}
        <div className='relative rounded-[10px] overflow-clip mb-10'>
          <div className='space-y-2 absolute left-3 top-3 z-20'>
            <Search_field className='w-[225px] md:w-[225px]' placeholder='Enter incident address or GPS'/>
            <Search_field className='w-[225px] md:w-[225px]' placeholder='Pinpoint damage'/>
          </div>
          <img src="imgs/location.png" alt="Location" className=' cursor-pointer hover:scale-105 transition-all w-full object-cover'/>
        </div>
      </Container>
    </>
  )
}

export default Step_4