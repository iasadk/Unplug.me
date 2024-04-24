import { AlarmClockMinus, Link } from 'lucide-react'
import React from 'react'
import { useUI } from '../context/ui.context'

const Form = () => {
    const { openInfoModal } = useUI();
    return (
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl">
                <h1 class="text-center text-2xl font-bold text-white sm:text-6xl">Timelock</h1>

                <p class="mx-auto mt-4 max-w-md text-center text-white/50 text-lg ">
                    Take control of your time. Set a time limit and break free from distractions. <span className='underline hover:text-white cursor-pointer' onClick={() => {
                        openInfoModal();
                    }}>more info</span>
                </p>

                <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8">
                    <div>
                        <label for="email" class="sr-only">Email</label>

                        <div class="relative flex justify-center">
                            <input
                                type="email"
                                class="w-[80%] rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm mx-auto"
                                placeholder="https://www.po*nhub.com"
                            />

                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <Link className='w-4 h-4 text-gray-700/50' />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="sr-only">Password</label>

                        <div class="relative flex justify-center">
                            <input
                                type="text"
                                class="w-[80%]  rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="20 min"
                            />

                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <AlarmClockMinus className='w-4 h-4 text-gray-700/50' />
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-[80%] mx-auto rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                    >
                        ❌ Block ❌
                    </button>

                </form>
            </div>
        </div>
    )
}
export default Form