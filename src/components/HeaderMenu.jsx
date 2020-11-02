import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Swal from 'sweetalert2';

import logo from '../assets/images/logo_holmes.png';

import ActionButton from './ActionButton';
import Modal from './Modal';

const HeaderMenu = ({ mode }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    roleid: 1,
    groupid: 1,
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const login = () => {
    setModal(!modal);
  };
  const loginUser = () => {
    login();
  };
  return (
    <>
      <div>
        <ActionButton text='Mi cuenta' onClick={handleClick} />
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose, loginUser}>Iniciar Sesión</MenuItem>
          <Link to='/profile'><MenuItem onClick={handleClose}>Mi Perfil</MenuItem></Link>
          <Link to='/addpost'><MenuItem onClick={handleClose}>Añadir Publicación</MenuItem></Link>
          <MenuItem onClick={handleClose}>Salir</MenuItem>
        </Menu>
      </div>
      <Modal visible={modal}>
        <div className='modal-content'>
          <span className='close' onClick={login}>
            &times;
          </span>
          <div className='logo'><img src={logo} alt='' /></div>
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
            value={form.password}
            onChange={handleInputChange}
            name='password'
            placeholder='Escribe tu contraseña....'
          />
          <br />
          <div className='buttonAction'><ActionButton text='Aceptar' onClick='/' /></div>
          <br />
          <div className="recover"><Link className='advisors'>Recuperar Contraseña</Link></div>
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

export default HeaderMenu;
