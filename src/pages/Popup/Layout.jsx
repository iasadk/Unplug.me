import React from 'react'
import Sidebar from '../../Components/Sidebar'
import InfoModal from '../../Components/modals/InfoModal'
import { ManagedUIContext } from '../../context/ui.context'
import Modals from '../../Components/modals'
import Drawers from '../../Components/Drawers'

const Layout = ({ children }) => {
    return (
        <ManagedUIContext>
            <div className='relative w-screen h-screen overflow-hidden'>
                <Modals />
                <Drawers />
                <Sidebar />
                {children}
            </div>

        </ManagedUIContext>
    )
}

export default Layout