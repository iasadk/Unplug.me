/* eslint-disable jsx-a11y/anchor-is-valid */
import { Bug, Info, Unplug } from 'lucide-react';
import React from 'react';
import { cn } from '../../utils/cn';
import { sidebarContent } from '../Constants/sidebar';
import { useUI } from '../context/ui.context';

const Sidebar = () => {
    const { setMode, mode, displayBlockListSidebar, closeBlockListSidebar, openBlockListSidebar } = useUI();
    const handleMode = (modeName) => {
        setMode(modeName);
    }
    return (
        <div className='absolute top-0 left-0'>
            <div className="flex h-screen w-16 flex-col justify-between  /*bg-[#1D171E]*/ bg-transparent relative">
                <div>
                    {/*Sidebar Logo*/}
                    <div className="inline-flex size-16 items-center justify-center">

                        <p
                            className="group relative grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 cursor-pointer"
                            onClick={() => {
                                handleMode("home")
                            }}
                        >
                            <Unplug className='text-gray-700/80' />
                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Unplug.me
                            </span>
                        </p>
                    </div>

                    {/*Sidebar Mode icons */}
                    <div className="">
                        <div className="px-2">
                            <ul className="space-y-4  pt-4">
                                {sidebarContent.map(x => (<li>
                                    <p
                                        className={cn("group relative flex justify-center rounded px-2 py-1.5 text-white cursor-pointer", {
                                            "text-gray-700/80": mode === x.mode,
                                            "bg-white": mode === x.mode,
                                            "opacity-50": x.disabled,
                                            "cursor-not-allowed": x.disabled,
                                        })}
                                        onClick={() => {
                                            handleMode(x.mode)
                                        }}
                                    >
                                        {x.icon}

                                        <span
                                            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible w-[max-content]"
                                        >
                                            {!x.disabled ? x.tooltipText : x.disableTootipText}
                                        </span>
                                    </p>
                                </li>))}

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="sticky inset-x-0 bottom-0 p-2">
                    <p
                        className={cn("group relative flex justify-center rounded px-2 py-[0.5rem] mb-4 text-white cursor-pointer", {
                            "text-gray-700/80": displayBlockListSidebar,
                            "bg-white": displayBlockListSidebar
                        })}
                        onClick={() => {
                            if (!displayBlockListSidebar) {
                                openBlockListSidebar()
                            } else {
                                closeBlockListSidebar()
                            }
                        }}
                    >
                        <Bug className="w-[1.15rem] h-[1.15rem]" />

                        <span
                            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible w-[max-content]"
                        >
                            Block list
                        </span>
                    </p>
                    <p
                        className="t group relative flex justify-center rounded px-2 py-1.5 text-white cursor-pointer"
                    >
                        <Info className="w-[1.15rem] h-[1.15rem]" />

                        <span
                            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                            Info
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Sidebar