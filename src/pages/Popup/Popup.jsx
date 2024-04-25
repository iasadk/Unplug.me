import React, { useState } from 'react';
import Unplug from '../../../svgs/Unplug';
import Container from '../../Components/Container';
import Landing from '../../Components/Landing';
import Timebomb from '../../Components/Timebomb';
import Layout from './Layout';
import './Popup.css';
import { useUI } from '../../context/ui.context';
const Popup = () => {
  const { mode } = useUI();
  console.log("POP: ", mode)
  return (
    <Layout>
      <Container className='min-w-[1000px] py-5'>
        <div className='flex justify-center'>
          <p className="flex gap-2 border border-white/50 rounded-3xl px-3 py-1 items-center hover:border-white hover:cursor-pointer transition-colors">
            <span className='font-medium text-white text-sm'>Unplug.me</span><Unplug />
          </p>
        </div>
        {mode === "home" && <Landing />}
        {mode === "time-bomb" && <Timebomb />}
      </Container>
    </Layout>
  );
};

export default Popup;
