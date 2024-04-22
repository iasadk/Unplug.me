import React from 'react';
import './Popup.css';
import Container from '../../Components/Container';
import Form from '../../Components/Form';
import Unplug from '../../../svgs/Unplug';
import Layout from './Layout';
const Popup = () => {
  return (
    <Layout>
      <Container className='min-w-[1000px] py-5'>
        <div className='flex justify-center'>
          <p className="flex gap-2 border border-white/50 rounded-3xl px-3 py-1 items-center hover:border-white hover:cursor-pointer transition-colors">
            <span className='font-medium text-white text-sm'>Unplug.me</span><Unplug />
          </p>
        </div>
        <Form />
      </Container>
    </Layout>
  );
};

export default Popup;
