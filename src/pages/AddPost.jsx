import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Layout from '../components/Layout';
import ButtonMenu from '../components/ButtonMenu';
import ActionButton from '../components/ActionButton';
import { COLOMBIA, MEXICO } from '../actions';

import '../assets/styles/AddPost.scss';
import image from '../assets/images/photo1.jpeg';

const AddPost = () => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  //const [country, setCountry] = React.useState('MX');
  // const countries = [
  //   {
  //     value: 'MX',
  //     label: 'México',
  //   },
  //   {
  //     value: 'COL',
  //     label: 'Colombia',
  //   },
  // ];

  return (
    <>
      <Layout>
        <h1>Añadir Publicación</h1>
        <section className='homeDescriptions'>
          <h2>Ubicación</h2>
          <ButtonMenu description='Selecciona tu País' label='País' id='country' />
          <ButtonMenu description='Venta o Renta' label='Venta o renta' id='country'/>
          <ButtonMenu description='Selecciona tu Estado o Departamento' label='Estado'id='state'/>
          <ButtonMenu description='Selecciona tu Holmes' label='Tipo' id='type'/>
          <ButtonMenu description='Selecciona tu Ciudad' label='Ciudad' id='city'/>
          <ButtonMenu description='Area' label='Area' id='area'/>
          <ButtonMenu description='Selecciona tu Colonia o barrio' label='Colonia' id='neightborg'/>
          <ButtonMenu description='Nivel o Planta' label='Nivel' id='nivel'/>
          <ButtonMenu description='Selecciona tu Calle' label='Calle' id='street'/>
          <ButtonMenu description='Costo de Venta o Renta' label='Costo' id='cost'/>
        </section>
        <section className='homeDescriptions'>
          <h2>Datos de tu Propiedad</h2>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
          <ButtonMenu description='Selecciona tu País' label='País' id='country'/>
        </section>
        <section className='descriptionText'>
          <h2>Descripción</h2>
          <form className='description' action=''>
            <input type='text' id='description' name='description' />
          </form>
        </section>
        <ActionButton text='Guardar Cambios' onClick={() => console.log('a trabajar')} />
        <section className='gallery'>
          <h2>Galería</h2>
          <div className='galleryImages'>
            <img src={image} alt='' />
            <img src={image} alt='' />
            <img src={image} alt='' />
          </div>
        </section>
        <div className='galleryButtons'>
          <ActionButton text='Agregar Imágen' onClick={() => console.log('a trabajar')} />
          <ActionButton text='Borrar Imágen' onClick={() => console.log('a trabajar')} />
        </div>
      </Layout>
    </>
  );
};

export default AddPost;
