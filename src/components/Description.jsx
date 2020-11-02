import React from 'react';
import '../assets/styles/components/Description.scss';

const Description = ({ text }) => {
  return (

    <div className='Description'>
      <div className='Description_block'>
        <h4 className='Description__Title'> Description </h4>
        <hr className='Description__Line' />
        <p className='Description__Paragraph'>{text}</p>
      </div>
    </div>

  );
};

export default Description;
