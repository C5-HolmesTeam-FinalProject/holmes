import React from 'react';
import ImageProfile from '../assets/images/ProfileForm.jpg';
import '../assets/styles/components/FormProperty.scss';
import Button from './ActionButton';

const FormProperty = () => {
    return (
        <form className='form'>
            <div className='form_name'>
                <img src={ImageProfile} alt='imagen de perfil' />
                <div className='form_name-profile'>
                    <p>Elonk Musk</p>
                    <span>Ver Perfil</span>
                </div>
            </div>
            <div className='form_date'>
                <input className='form_date-input' type='text' placeholder='Nombre' />
                <input className='form_date-input' type='text' placeholder='Telefono' />
                <input className='form_date-input' type='text' placeholder='Email' />
                <input className='form_date-input' type='text' placeholder='Estoy interesado en...' />
            </div>
            <Button mode='dark' text='Leer Mas' />
        </form>
    );
};

export default FormProperty;
