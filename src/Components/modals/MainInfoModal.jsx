import { Dot, X } from 'lucide-react'
import React from 'react'
import { cn } from '../../../utils/cn'
import { useUI } from '../../context/ui.context'

const MainInfoModal = () => {
    const { closeMainInfoModal, displayMainInfoModal } = useUI();
    if (displayMainInfoModal) {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "Escape":
                    closeMainInfoModal();
                    break;

                default:
                    break;
            }
        })
    }
    return (
        <div className='backdrop-blur-3xl bg-black/60 w-full h-full absolute z-40'
            onClick={() => {
                closeMainInfoModal();
            }}
        >
            <div className={cn("rounded-lg bg-white p-8 shadow-2xl w-[500px] absolute top-[21rem] left-[50%] -translate-x-[50%] -translate-y-[50%]")}>
                <h2 className="text-lg font-bold">Welcome to <span className='underline hover:text-indigo-500 hover:cursor-pointer'>Unplug.me</span></h2>
                <X className='absolute top-2 right-2 cursor-pointer text-gray-600/60' onClick={() => {
                    closeMainInfoModal();
                }} />
                {/*<p className="mt-2 text-sm text-gray-500 flex "><Dot /> Blocks website after specified time.</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Maximum access time is 25 minutes.</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Website is blocked for 15 minutes after max time.</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Access restricted until block timer expires.</p>*/
                }
                <p className='font-normal my-4 text-[1rem] leading-relaxed'>
                    Welcome to our productivity-boosting extension! Designed to enhance your focus, our tool limits your time on frequently visited websites, promoting efficient work habits. Currently featuring the "Time Lock" mode and "Permanent Block" mode, with exciting new modes on the horizon. Enjoy our sleek, modern interface, a refreshing departure from traditional UI designs. For feedback and suggestions, feel free to reach out via email at <a href="mailto:iasad0017@gmail.com" className='hover:cursor-pointer hover:text-indigo-500 underline'>iasad0017@gmail.com</a>. Get ready to supercharge your productivity!.
                </p>
                <h2 className="text-lg font-bold">Features: </h2>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Click on Bug to open all blocked sites. 🐞</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Drag Blocked website card to left to delete it from block list. 🚮</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Lifetime free access with modern web design. 🆓</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Upcoming new features. 😄</p>
                <p className="mt-2 text-sm text-gray-500 flex "><Dot /> Can Drag the timer component anywhere in the screen. 🐱‍🏍</p>
            </div>
        </div>
    )
}

export default MainInfoModal