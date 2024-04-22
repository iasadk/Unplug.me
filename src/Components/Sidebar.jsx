/* eslint-disable jsx-a11y/anchor-is-valid */
import { Info, Lock, OctagonX, TimerReset, Unplug, WholeWord } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='absolute top-0 left-0'>
            <div class="flex h-screen w-16 flex-col justify-between  /*bg-[#1D171E]*/ bg-transparent">
                <div>
                    {/*Sidebar Logo*/}
                    <div class="inline-flex size-16 items-center justify-center">

                        <a
                            href="#"
                            class="group relative grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                        >
                            <Unplug className='text-gray-700/80' />
                            <span
                                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Unplug.me
                            </span>
                        </a>
                    </div>

                    {/*Sidebar Mode icons */}
                    <div class="">
                        <div class="px-2">
                            <ul class="space-y-4  pt-4">
                                <li>
                                    <a
                                        href="#"
                                        class="group relative flex justify-center rounded px-2 py-1.5 text-gray-700/80 bg-white "
                                    >
                                        <TimerReset className='w-5 h-5' />

                                        <span
                                            class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible w-[max-content]"
                                        >
                                            Time bomb
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group relative flex justify-center rounded px-2 py-1.5 text-white "
                                    >
                                        <OctagonX className='w-[1.15rem] h-[1.15rem]' />

                                        <span
                                            class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible w-[max-content]"
                                        >
                                            Permanent Block
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group relative flex justify-center rounded px-2 py-1.5 text-white "
                                    >
                                        <WholeWord className="w-5 h-5" />

                                        <span
                                            class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible w-[max-content]"
                                        >
                                            Keyword Block
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        class="group relative flex justify-center rounded px-2 py-1.5 text-white "
                                    >
                                        <Lock className="w-[1.15rem] h-[1.15rem]" />

                                        <span
                                            class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible w-[max-content]"
                                        >
                                            Encypted Block
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="sticky inset-x-0 bottom-0 p-2">
                    <a
                        href="#"
                        class="t group relative flex justify-center rounded px-2 py-1.5 text-white"
                    >
                        <Info className="w-[1.15rem] h-[1.15rem]" />

                        <span
                            class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                            Info
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar