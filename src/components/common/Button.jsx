import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-orange text-light px-[25px] py-[12px] font-onest font-bold text-[12px] rounded-[6px]'>
        {children}
    </button>
  )
}

export default Button