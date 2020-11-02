import React from 'react';
import FeaturesDetail from './FeaturesDetail';
import '../assets/styles/components/Features.scss';

const Features = () => {
  return (
    <section className='Features'>
      <h4 className='Features__Title'>Características</h4>
      <hr className='Features__Line' />
      <div className='Features__Detail'>
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
      </div>
      <div className='Features__Detail'>
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
        <FeaturesDetail title='Wifi' />
      </div>
    </section>
  );
};
export default Features;
