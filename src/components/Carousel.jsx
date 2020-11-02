import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../assets/styles/components/Carousel.scss';
import { Carousel } from 'react-responsive-carousel';

import home1 from '../assets/images/home1.jpg';
import home2 from '../assets/images/home2.jpg';
import home3 from '../assets/images/home3.jpg';
import home4 from '../assets/images/home4.jpg';
import home5 from '../assets/images/home5.jpg';

class CarouselLanding extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={home1} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={home2} />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={home3} />
          <p className='legend'>Legend 3</p>
        </div>
        <div>
          <img src={home4} />
          <p className='legend'>Legend 3</p>
        </div>
        <div>
          <img src={home5} />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    );
  }
};

export default CarouselLanding;
