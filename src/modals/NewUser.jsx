import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import logo from '../assets/images/logo_holmes.png';
import ActionButton from '../components/ActionButton';
import Modal from '../components/Modal';


const NewUser = ({ mode }) => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    roleid: 1,
    parentuserid: null,
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
            <Link className='advisors'>Aviso de<br/> Privacidad</Link>
            <Link className='advisors'>Terminos y<br/> Condiciones</Link>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default NewUser;
