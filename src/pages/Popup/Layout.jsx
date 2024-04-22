import React from 'react'
import Sidebar from '../../Components/Sidebar'

const Layout = ({ children }) => {
    return (
        <div className='relative w-screen h-screen'>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout