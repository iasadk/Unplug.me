import { X } from 'lucide-react'
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
        <div className='backdrop-blur-3xl bg-black/60 w-full h-full absolute z-40'>
            <div className={cn("rounded-lg bg-white p-8 shadow-2xl w-[500px] absolute top-44 left-[50%] -translate-x-[50%] -translate-y-[50%]")}>
                <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>
                <X className='absolute top-2 right-2 cursor-pointer text-gray-600/60' onClick={() => {
                    closeInfoModal();
                }} />
                <p className="mt-2 text-sm text-gray-500">
                    Doing that could have cause some issues elsewhere, are you 100% sure it's OK?
                </p>

                <div className="mt-4 flex gap-2">
                    <button type="button" className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
                        Yes, I'm sure
                    </button>

                    <button type="button" className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
                        No, go back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoModal