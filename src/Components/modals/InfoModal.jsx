import { Dot, GitCommitHorizontal, X } from 'lucide-react'
import React from 'react'
import { cn } from '../../../utils/cn'
import { useUI } from '../../context/ui.context'

const InfoModal = () => {
    const { closeInfoModal, displayInfoModal } = useUI();
    if (displayInfoModal) {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "Escape":
                    closeInfoModal();
                    break;

                default:
                    break;
            }
        })
    }
    return (
        <div className='backdrop-blur-3xl bg-black/60 w-full h-full absolute z-40'
            onClick={() => {
                closeInfoModal();
            }}
        >
            <div className={cn("rounded-lg bg-white p-8 shadow-2xl w-[500px] absolute top-44 left-[50%] -translate-x-[50%] -translate-y-[50%]")}>
                <h2 className="text-lg font-bold">All About Time lock mode: </h2>
                <X className='absolute top-2 right-2 cursor-pointer text-gray-600/60' onClick={() => {
                    closeInfoModal();
                }} />
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Blocks website after specified time.</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Maximum access time is 25 minutes.</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Website is blocked for 15 minutes after max time.</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Access restricted until block timer expires.</p>

            </div>
        </div>
    )
}

export default InfoModal