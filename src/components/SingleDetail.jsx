import React from 'react';
import '../assets/styles/components/SingleDetail.scss';

const SingleDetail = ({ foto, titulo }) => {
  return (
    <div className='SingleDetail'>
      <img src={foto} className='SingleDetail--img' alt='img' />
      <p className='SingleDetail--title'>{titulo}</p>
    </div>
  );
};

export default SingleDetail;
