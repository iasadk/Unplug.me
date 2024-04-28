import React from 'react'
import Drawers from '../../Components/Drawers'
import Sidebar from '../../Components/Sidebar'
import Modals from '../../Components/modals'
import { ManagedUIContext } from '../../context/ui.context'
import BottomStripe from '../../Components/BottomStripe'

const Layout = ({ children }) => {
    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <Modals />
            <Drawers />
            <Sidebar />
            {children}
            <BottomStripe />
        </div>

    )
}

export default Layout