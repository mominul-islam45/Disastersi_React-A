import React from 'react'
import Container from '../../components/common/container'
import Title from '../../components/common/Title'

const Step_3 = () => {
  return (
    <>
      <Container className='max-w-[760px] 2xl:max-w-[900px]'>
        {/* New incident title */}
        <div>
          <Title className='pt-6 pb-1 text-[20px] md:text-[24px]'>Let’s give the incident a title?</Title>
          <p className='text-sm text-gray pb-5'>Make a title that will easily identify the incidents</p>
          <input type="text" placeholder='Add title here' className='w-full bg-light py-[12px] px-[10px] outline-0 border border-light-v2 rounded-[6px] hover:border-dark/40 focus:border-orange/40 placeholder:text-[12px] placeholder:text-gray'/>
        </div>

        {/* New incident Description */}
        <div>
          <Title className='pt-6 pb-1 text-[20px] md:text-[24px]'>Describe what happened during the incident?</Title>
          <p className='text-sm text-gray pb-5'>Share some information about the incident. The when, where, how.</p>
          <textarea rows='4' placeholder='Type here' className='w-full bg-light py-[12px] px-[10px] outline-0 border border-light-v2 rounded-[6px] hover:border-dark/40 focus:border-orange/40 placeholder:text-[12px] placeholder:text-gray'></textarea>
        </div>
      </Container>
    </>
  )
}

export default Step_3