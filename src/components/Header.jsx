import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

import Swal from 'sweetalert2';

import logo from '../assets/images/logo_holmes.png';

import ActionButton from './ActionButton';
import Modal from './Modal';
import HeaderMenu from './HeaderMenu';

const Header = ({ mode }) => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    roleid: 1,
    groupid: 1,
    user: '',
    email: '',
    password1: '',
    password2: '',
    age: '',
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const nuevo = () => {
    setModal(!modal);
  };
  const addUser = () => {
    nuevo();
  };

  return (
    <>
      <div className={mode === 'dark' ? 'Header Header--dark' : 'Header'}>
        <Link to='/'><img className='Header__brand' src={logo} alt='logo' /></Link>
        <div className='Header__nav'>
          <a className='Header__nav-item' onClick={addUser}>Registrarme</a>
          <HeaderMenu />
        </div>
      </div>
      <Modal visible={modal}>
        <div className='modal-content'>
          <span className='close' onClick={nuevo}>
            &times;
          </span>
          <div className='logo'><img src={logo} alt=""/></div>
          <span className='label'>Usuario</span>
          <input
            className='input'
            type='text'
            value={form.user}
            onChange={handleInputChange}
            name='user'
            placeholder='Elige un nombre de usuario....'
          />
          <br />
          <span className='label'>Email</span>
          <input
            className='input'
            type='email'
            value={form.email}
            onChange={handleInputChange}
            name='email'
            placeholder='Escribe tu email....'
          />
          <br />
          <span className='label'>Contraseña</span>
          <input
            className='input'
            type='password'
            value={form.password1}
            onChange={handleInputChange}
            name='password1'
            placeholder='Elige una contraseña....'
          />
          <br />
          <span className='label'>Confirmar Contraseña</span>
          <input
            className='input'
            type='password'
            value={form.password2}
            onChange={handleInputChange}
            name='password2'
            placeholder='Repite tu contraseña....'
          />
          <div className='buttonAction'><ActionButton text='Aceptar' onClick='/' /></div>
          <br />
          <div className="terms">
            <Link to='/' className='advisors'>Aviso de<br/> Privacidad</Link>
            <Link to='/' className='advisors'>Terminos y<br/> Condiciones</Link>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Header;

{ /* <Header mode='dark' /> */ }
