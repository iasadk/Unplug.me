import React from 'react'
import Sidebar from '../Sidebar'
import { cn } from '../../../utils/cn'
import { useUI } from '../../context/ui.context';
import { Timer } from 'lucide-react';

const BlockListSidebar = () => {
    const { displayBlockListSidebar } = useUI();
    return (
        <div className={cn('h-[95%] mt-4 w-[250px] bg-white bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 text-white absolute left-[75px] -translate-x-[300px] transition-all opacity-0 rounded-lg p-2 duration-300 flex flex-col  space-y-3 overflow-y-scroll no-scrollbar', {
            "translate-x-0": displayBlockListSidebar,
            "opacity-100": displayBlockListSidebar,
        })}>
            {/* <p className='flex items-center gap-3 bg-black/70 rounded-lg p-2'>
                <img src='https://www.google.com/s2/favicons?domain=github.com&sz=128' className='w-8 h-8 rounded-full invert-1' alt='icon' />
                <div className='flex flex-col items-start'>
                    <p className='font-semibold'>
                        https://github.com/
                    </p>
                    <p className='text-white/50 text-[.7rem]'>
                        12 Jan, 2024
                    </p>
                </div>
    </p>*/}
            {[...new Array(20)].map(x => (<p className='flex items-center gap-3 bg-black/70 rounded-lg p-2'>
                <img src='https://www.google.com/s2/favicons?domain=dev.to&sz=128' className='w-8 h-8 rounded-full invert-1' alt='icon' />
                <div className='flex justify-between w-full items-center'>
                    <div className='flex flex-col items-start'>
                        <p className='font-semibold'>
                            https://dev.to/
                        </p>
                        <p className='text-white/50 text-[.7rem]'>
                            15 Jan, 2024
                        </p>
                    </div>
                    <div className='flex flex-col items-end mt-1'>
                        <p className='font-semibold'>
                            <Timer className='w-4 h-4' />
                        </p>
                        <p className='text-white/50 text-[.7rem]'>
                            10 min
                        </p>
                    </div>
                </div>
            </p>
            ))}
        </div>
    )
}

export default BlockListSidebar