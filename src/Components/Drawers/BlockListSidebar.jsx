import dateFormat from "dateformat";
import { ArrowLeft, Ban, OctagonX, Timer, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import { useUI } from '../../context/ui.context';

import { useEffect } from 'react';
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { getUrlWithoutProtocol } from '../../../utils/utils';
const BlockListSidebar = () => {
    const { displayBlockListSidebar, closeBlockListSidebar, forceRerenderBlockList } = useUI();
    const [blockedWebsites, setBlockedWebsites] = useState([]);
    const [ajxBlockList, setAjxBlockList] = useState(false)
    if (displayBlockListSidebar) {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "Escape":
                    closeBlockListSidebar()
                    break;

                default:
                    break;
            }
        })
    }

    const fetchBlockedWebsites = async () => {
        setAjxBlockList(true)
        chrome.storage.sync.get("key").then((res) => {
            setBlockedWebsites(res.key);
            console.log(res.key)
        }
        ).catch(err => {
            console.log(err)
        }).finally(() => {
            setAjxBlockList(false)
        })

    }

    const handleBlockList = (url) => {
        const leftWebsites = blockedWebsites.filter(web => web.url !== url);
        chrome.storage.sync.set({ key: leftWebsites })
    }

    const trailingActions = () => {
        return (
            <TrailingActions

            >
                <SwipeAction
                    destructive={true}
                    onClick={() => console.info('swipe action triggered')}
                >
                    <div className='flex flex-col justify-center items-center'>
                        <Trash2 className='w-4 h-4' />
                        <p className='font-medium text-[.6rem]'>Remove</p>
                    </div>
                </SwipeAction>
            </TrailingActions>

        )
    };

    useEffect(() => {
        fetchBlockedWebsites();
    }, [displayBlockListSidebar, forceRerenderBlockList])
    console.log(blockedWebsites.length)
    return (
        <div className={cn('h-[95%] mt-4 w-[250px] bg-white bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 text-white absolute left-[75px] -translate-x-[300px] transition-all opacity-0 rounded-lg p-2 duration-300 flex flex-col  space-y-3 overflow-y-scroll no-scrollbar prevent-select', {
            "translate-x-0": displayBlockListSidebar,
            "opacity-100": displayBlockListSidebar,
        })}>
            {blockedWebsites.length ? <SwipeableList className='no-scrollbar'>

                {blockedWebsites.map(x => (<SwipeableListItem
                    className='my-2'
                    onSwipeEnd={() => {
                        handleBlockList(x.url)
                    }}
                    // leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    <p className='flex items-center gap-3 bg-black/70 rounded-lg p-2 w-full'>
                        <img src={`https://www.google.com/s2/favicons?domain=${getUrlWithoutProtocol(x.url)}&sz=128`} className='w-8 h-8 rounded-full invert-1' alt='icon' />
                        <div className='flex justify-between w-full items-center'>
                            <div className='flex flex-col items-start'>
                                <p className='font-semibold'>
                                    {getUrlWithoutProtocol(x.url)}
                                </p>
                                <p className='text-white/50 text-[.7rem]'>
                                    {dateFormat(x.createdAt || new Date(), "dd mmm, yyyy")}
                                </p>
                            </div>
                            {x.mode === "time-bomb" ? <div className='flex flex-col items-center mt-1'>
                                <p className='font-semibold'>
                                    <Timer className='w-4 h-4' />
                                </p>
                                <p className='text-white/50 text-[.7rem]'>
                                    {x.orgTime} min
                                </p>
                            </div> : x.mode === "permanent-block" ? <div className='flex flex-col items-center mt-1'>
                                <p className='font-semibold pr-1'>
                                    <Ban className='w-4 h-4 text-red-500 font-medium' />
                                </p>

                            </div> : null}
                        </div>
                    </p>
                </SwipeableListItem>
                ))}

            </SwipeableList> : <div className='w-full h-full flex flex-col justify-center'>
                <p className='w-full text-center flex flex-col justify-center'>
                    <p className='flex justify-center'><OctagonX /></p>
                    <p className='text-lg my-2 font-medium'>Blocklist is empty !!</p>
                </p>
            </div>}

            {blockedWebsites.length ? <p className="text-center flex justify-center gap-1 items-center"><ArrowLeft />Swipe items to delete</p> : null}
        </div>
    )
}

export default BlockListSidebar