import React from 'react';
import '../assets/styles/components/FeaturesDetail.scss';
import ok from '../assets/images/ok.png';

const FeaturesDetail = ({ title }) => {
  return (
    <div className='Features__Detailed'>
      <img className='Features__Img' src={ok} alt='check' />
      <p className='Features__Description'>{title}</p>
    </div>
  );
};
export default FeaturesDetail;
