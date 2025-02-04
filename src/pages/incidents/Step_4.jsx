import React from 'react'
import Container from '../../components/common/container'
import Title from '../../components/common/Title'

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
        <div>
          
        </div>
      </Container>
    </>
  )
}

export default Step_4