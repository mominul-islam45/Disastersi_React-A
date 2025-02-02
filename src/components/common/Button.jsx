import React from 'react'
import { cn } from '../../lib/utility/cn'

const Button = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={cn('bg-orange text-light px-[25px] py-[12px] font-onest font-bold text-[12px] rounded-[6px] hover:cursor-pointer hover:bg-orange-600 active:bg-orange hover:scale-105 transition-all', className)}>
        {children}
    </button>
  )
}

export default Button