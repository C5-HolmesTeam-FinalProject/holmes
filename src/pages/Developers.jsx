import React from 'react';
import Layout from '../components/Layout';
import '../assets/styles/Developers.scss';

import developers from '../assets/images/developers.png';

const Developers = () => {
  return (
    <>
      <Layout>
        <div className='Grid__Developers'>
          <div className='Grid__Developers--uno'>
            <img className='Grid__Developers--img' src={developers} alt='' />
            <input className='Grid__Developers--btnuno' type='submit' id='developeruno' name='Nombre' value='Nombre 1' />
            <input className='Grid__Developers--btnlink' type='submit' id='linkuno' name='Nombre' value='Linkedin' />
          </div>

          <div className='Grid__Developers--dos'>
            <img className='Grid__Developers--img' src={developers} alt='' />
            <input className='Grid__Developers--btndos' type='submit' id='developer2' name='Nombre' value='Nombre 2' />
            <input className='Grid__Developers--btnlink' type='submit' id='linkdos' name='Nombre' value='Linkedin' />
          </div>

          <div className='Grid__Developers--tres'>
            <img className='Grid__Developers--img' src={developers} alt='' />
            <input className='Grid__Developers--btntres' type='submit' id='developer3' name='Nombre' value='Nombre 3' />
            <input className='Grid__Developers--btnlink' type='submit' id='linktres' name='Nombre' value='Linkedin' />
          </div>

          <div className='Grid__Developers--cuatro'>
            <img className='Grid__Developers--img' src={developers} alt='' />
            <input className='Grid__Developers--btncuatro' type='submit' id='developer4' name='Nombre' value='Nombre 4' />
            <input className='Grid__Developers--btnlink' type='submit' id='linkcuatro' name='Nombre' value='Linkedin' />
          </div>

          <div className='Grid__Developers--cinco'>
            <img className='Grid__Developers--img' src={developers} alt='' />
            <input className='Grid__Developers--btncinco' type='submit' id='developer5' name='Nombre' value='Nombre 5' />
            <input className='Grid__Developers--btnlink' type='submit' id='linkcinco' name='Nombre' value='Linkedin' />
          </div>

          <div className='Grid__Developers--seis'>
            <img className='Grid__Developers--img' src={developers} alt='' />
            <input className='Grid__Developers--btnseis' type='submit' id='developer6' name='Nombre' value='Nombre 6' />
            <input className='Grid__Developers--btnlink' type='submit' id='linkseis' name='Nombre' value='Linkedin' />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Developers;
