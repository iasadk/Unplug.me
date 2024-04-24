import React from 'react'
import BlockListSidebar from './BlockListSidebar'
import { useUI } from '../../context/ui.context'

const Drawers = () => {
    const { displayBlockListSidebar } = useUI();
    return (
        <div>
            {displayBlockListSidebar && <BlockListSidebar />}
        </div>
    )
}

export default Drawers