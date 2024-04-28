import React from 'react'
import InfoModal from './InfoModal'
import { useUI } from '../../context/ui.context'
import MainInfoModal from './MainInfoModal';

const Modals = () => {
    const { displayInfoModal, displayMainInfoModal } = useUI();
    return (
        <div >
            {displayInfoModal && <InfoModal />}
            {displayMainInfoModal && <MainInfoModal />}
        </div>
    )
}

export default Modals