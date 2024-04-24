import React from 'react'
import InfoModal from './InfoModal'
import { useUI } from '../../context/ui.context'

const Modals = () => {
    const { displayInfoModal } = useUI();
    return (
        <div >
            {displayInfoModal && <InfoModal />}
        </div>
    )
}

export default Modals