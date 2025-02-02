import React from 'react'
import { cn } from '../../lib/utility/cn'

const Title = ({children, className}) => {
  return (
    <h2 className={cn(' font-onest font-bold text-dark text-[26px] leading-[33px]', className)}>
        {children}
    </h2>
  )
}

export default Title