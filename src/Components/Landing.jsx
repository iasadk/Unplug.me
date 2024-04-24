import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Landing = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <h1 className="text-center text-2xl font-bold text-white sm:text-6xl">Don't Let Websites Be Your Boo! </h1>
                <p className="mx-auto mt-4 max-w-md text-center text-white/50 text-lg ">
                    Feeling overwhelmed by the internet? Take control with our website blocker and get sh*t done!
                </p>

                <div className='flex justify-center mt-28'>
                    <p className="flex gap-2 border border-white/50 rounded-3xl px-4 py-2 items-center hover:bg-white/90 hover:cursor-pointer transition-all bg-white group">
                        <span className='font-semibold text-black text-[1rem]'>Start Blocking Now!</span>
                        <ArrowUpRight className='w-4 h-4 group-hover:rotate-45 transition-transform' />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Landing