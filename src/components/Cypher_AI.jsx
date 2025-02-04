import React from 'react'
import Button from './common/Button'

const Cypher_AI = () => {
  return (
    <>
        <div className='w-full sm:w-[330px] mx-3 sm:mx-0 rounded-[12px] overflow-clip bg-light-v2'>
            {/* Heading */}
            <div className='bg-orange p-[15px]'>
                <h3 className='text-[18px] text-light font-bold'>Chat with Cypher</h3>
            </div>
            {/* Body */}
            <div className='p-[15px]'>
                {/* Texts */}
                <div className=' w-full flex flex-col space-y-3'>
                    <div className=' self-end w-[213px] bg-dark-v2 p-[13px] rounded-[7px] text-xs text-white leading-[19px]'>Lorem ipsum dolar sit general sac mascho werho</div>
                    <div className='  w-[213px] bg-light p-[13px] rounded-[7px] border border-dark/40 text-xs text-gray leading-[19px]'>Lorem ipsum dolar sit general sac mascho werho</div>
                    <div className=' w-[213px] bg-light p-[13px] rounded-[7px] border border-dark/40 text-xs text-gray leading-[19px]'>Lorem ipsum dolar sit general sac mascho werho</div>
                    <div className='self-end w-[213px] bg-dark-v2 p-[13px] rounded-[7px] text-xs text-white leading-[19px]'>Lorem ipsum dolar sit general sac mascho werho</div>
                </div>
                
                {/* Input and attachment */}
                <div className='space-y-2'>
                    <input type="text" placeholder='Enter your question...' className='w-full px-[10px] py-[8px] mt-4 rounded-[6px] border border-light-v2 bg-white placeholder:text-xs outline-0 hover:border-dark/40 focus:border-orange/40 text-gray'/>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-[7px]'>
                            <img src="icons/camera.svg" alt="Icon" />
                            <img src="icons/image.svg" alt="Icon" />
                            <img src="icons/attach.svg" alt="Icon" />
                        </div>
                        <Button className='rounded-full py-[8px]'>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cypher_AI