import React from 'react';
import ActionButton from './ActionButton';
import logo from '../assets/images/logo_holmes.png';
import twitter from '../assets/images/twitter.png';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import '../assets/styles/Footer.scss';

const Footer = ({ title }) => (
  <div className='Footer'>
    <section className='Footer__FirstPart'>
      <h3 className='Footer__title'>{title}</h3>
      <ActionButton text='Trabaja con nosotros' to='/developers' />
    </section>
    <hr className='Footer__line' />
    <div className='Footer__secondpart'>
      <section className=''>
        <img className='Footer__brand' src={logo} alt='logo' />
        <br />
        <a href='/'><img className='Footer__SocialIcons--facebook' src={facebook} alt='facebook' /></a>
        <a href='/'><img className='Footer__SocialIcons' src={instagram} alt='instagram' /></a>
        <a href='/' alt='twitter'><img className='Footer__SocialIcons' src={twitter} alt='twitter' /></a>
      </section>

      <section className='Footer__column'>
        <h5>¿Quiénes somos?</h5>
        <p>Un portal web dedicado al mercado de bienes Raices. Holmes te ofrece inmuebles en Venta y Renta en Colombia y México. </p>
      </section>
      <section className='Footer__column'>
        <h5>Anuncios</h5>
        <ul>
          <li><a href='/'>En Venta</a></li>
          <li><a href='/'>Arriendos</a></li>
          <li><a href='/'>Tipo de Inmueble</a></li>
        </ul>
      </section>
      <section className='Footer__column'>
        <h5>Servicio al Cliente</h5>
        <ul>
          <li>Contáctenos</li>
          <li><a href='/'>Acerca de Nosotros</a></li>
          <li><a href='/'>Equipo</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Footer;
