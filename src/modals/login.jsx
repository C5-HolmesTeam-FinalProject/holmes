import React from 'react';

import Modal from '../components/Modal';

import Swal from 'sweetalert2';
import logo from '../assets/images/logo_holmes.png';


const Login = () => {

  return (
    <Modal visible={modal}>
      <div className='modal-content'>
        <span className='close' onClick={nuevo}>
          &times;
        </span>
        <h2>New User</h2>
        <span className='label'>Name</span>
        <input
          className='input'
          type='text'
          value={form.name}
          onChange={handleInputChange}
          name='name'
        />
        <br />
        <span className='label'>Lastname</span>
        <input
          className='input'
          type='text'
          value={form.lastname}
          onChange={handleInputChange}
          name='lastname'
        />
        <br />
        <span className='label'>Age</span>
        <input
          className='input'
          type='text'
          value={form.age}
          onChange={handleInputChange}
          name='age'
        />
        <br />
        <span className='label'>Email</span>
        <input
          className='input'
          type='text'
          value={form.email}
          onChange={handleInputChange}
          name='email'
        />
        <br />
        <span className='label'>Phone</span>
        <input
          className='input'
          type='text'
          value={form.phone}
          onChange={handleInputChange}
          name='phone'
        />
        <button className='btn' onClick={saveUser}>
          Save
        </button>
        <br />
      </div>
    </Modal>
  );
};
export default Login;
