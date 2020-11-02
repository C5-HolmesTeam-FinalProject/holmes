import React from 'react';
import '../assets/styles/components/Filter.scss';
import arrowdown from '../assets/images/arrowsdown.svg';

const Filter = ({ text }) => (
  <section className='Filter'>
    <span className='Filter__span'>{text}</span>
    <img className='Filter__img' src={arrowdown} alt='arrowdown' />
  </section>

);

export default Filter;
