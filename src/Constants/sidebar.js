import { Lock, OctagonX, TimerReset, WholeWord } from "lucide-react";
import React from 'react'

export const sidebarContent = [
    {
        id: 1,
        tooltipText: "Time lock",
        icon: <TimerReset className='w-5 h-5' />,
        mode: "time-bomb",
        disabled: false,
        disableTootipText: "Launching Soon !!"
    },
    {
        id: 2,
        tooltipText: "Permanent block",
        icon: <OctagonX className='w-[1.15rem] h-[1.15rem]' />,
        mode: "permanent-block",
        disabled: true,
        disableTootipText: "Launching Soon !!"
    },
    {
        id: 3,
        tooltipText: "Keyword Block",
        icon: <WholeWord className="w-5 h-5" />,
        mode: "keyword-block",
        disabled: true,
        disableTootipText: "Launching Soon !!"
    },
    {
        id: 3,
        tooltipText: "Encypted Block",
        icon: <Lock className="w-[1.15rem] h-[1.15rem]" />,
        mode: "encypted-block",
        disabled: true,
        disableTootipText: "Launching Soon !!"
    },
]