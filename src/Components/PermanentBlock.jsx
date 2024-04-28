import React from 'react'
import { cn } from '../../utils/cn'
import PermanentBlockForm from './PermanentBlockForm'

const PermanentBlock = ({ className }) => {
    return (
        <div className={cn(className)}>
            <PermanentBlockForm />
        </div>
    )
}

export default PermanentBlock