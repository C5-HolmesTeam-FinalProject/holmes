import React from 'react';
import { Link } from 'react-router-dom'

import photo from '../assets/images/hotel1.jpg';
import heart from '../assets/images/heart.png';
import bed from '../assets/images/bed.png';
import bathroom from '../assets/images/bath.png';
import area from '../assets/images/meters.png';

import '../assets/styles/components/Card.scss';

const Card = ({ title }) => {
  return (
    <section className='card'>
      <Link to='/detailsproperty'>
        <img src={photo} className='card__image' alt='Imagen de la Card' />
      </Link>
      <div className='card__body'>
        <h2 className='card__body--title'>{title}</h2>
        <img src={heart} className='card__body--heart' alt='Heart icon' />
      </div>
      <div className='card__footer'>
        <img src={bed} className='card__footer--bed' alt='beds' />
        <img src={bathroom} className='card__footer--bathroom' alt='bathroom' />
        <img src={area} className='card__footer--area' alt='area' />
      </div>
    </section>
  );
};

export default Card;
