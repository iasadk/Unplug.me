import React from 'react'
import Form from './Form'
import { cn } from '../../utils/cn'

const Timebomb = ({ className }) => {
    return (
        <div className={cn(className)}>
            <Form />
        </div>
    )
}

export default Timebomb