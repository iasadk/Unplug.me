import { Ban, Circle, Link } from 'lucide-react';
import React, { useState } from 'react';
import { getClenUrl, isValidURL } from '../../utils/utils';
import { useUI } from '../context/ui.context';

const PermanentBlockForm = () => {
    const { openInfoModal, mode, setForceRender, forceRerenderBlockList } = useUI();
    const [formData, setFormData] = useState({
        url: "",
        mode: mode || "permanent-block"
    });
    const [changeLockIcon, setChangeLockIcon] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.url) {
            alert("Fill All values!!");
            return;
        }
        if (!isValidURL(formData.url)) {
            alert("Enter a valid URL.");
            return
        }
        const prevSyncData = (await chrome.storage.sync.get("key"))?.key;
        if (prevSyncData) {
            await chrome.storage.sync.set({ "key": [...prevSyncData, { ...formData, createdAt: Date.now() }] });
        } else {
            await chrome.storage.sync.set({ "key": [formData] });
        }
        setFormData({
            url: "",
            mode: "permanent-block"
        });
        setForceRender(!forceRerenderBlockList);
    }

    return (
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl">
                <h1 class="text-center text-2xl font-bold text-white sm:text-6xl">Permanent Block</h1>

                <p class="mx-auto mt-4 max-w-md text-center text-white/50 text-lg ">
                    Unlock Your Focus with Permanent Block - Take charge of your time, eliminate distractions, and reclaim productivity.<span className='underline hover:text-white cursor-pointer' onClick={() => {
                        openInfoModal();
                    }}>more info</span>
                </p>

                <form action="#" class="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8" onSubmit={(e) => {
                    handleSubmit(e)
                }}>
                    <div>
                        <label for="url" class="sr-only">Email</label>

                        <div class="relative flex justify-center w-[80%] mx-auto">
                            <input
                                type="text"
                                value={formData.url}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        url: getClenUrl(e.target.value) || "INVALID URL"
                                    })
                                }}
                                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm mx-auto"
                                placeholder="https://www.po*nhub.com"
                            />

                            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <Link className='w-4 h-4 text-gray-700/50' />
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="w-[80%] mx-auto rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white flex items-center justify-center gap-1"
                        onMouseEnter={() => {
                            setChangeLockIcon(true)
                        }}
                        onMouseLeave={() => {
                            setChangeLockIcon(false)
                        }}
                    >
                        {!changeLockIcon ? <Circle className='w-4 h-4' /> : <Ban className='w-4 h-4 text-red-500 font-medium' />} Block{!changeLockIcon ? <Circle className='w-4 h-4' /> : <Ban className='w-4 h-4 text-red-500 font-medium' />}
                    </button>

                </form>
            </div>
        </div>
    )
}
export default PermanentBlockForm