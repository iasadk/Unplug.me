import React from 'react'
import { cn } from '../../utils/cn'

const Container = ({ children, className = "" }) => {
    return (
        <div
            className={cn('mx-auto min-w-[800px] max-w-screen-xl px-2.5 md:px-20', className)}
        >
            {children}
        </div>
    )
}

export default Container