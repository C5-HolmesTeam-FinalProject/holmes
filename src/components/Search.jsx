import React from 'react';

import ButtonMenu from '../components/ButtonMenu';
import ActionButton from '../components/ActionButton';
import { COLOMBIA, MEXICO } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='Search'>
    <h1>Busca tu Holmes ideal ahora!!</h1>
    <div className='Search__Filter'>
      <ButtonMenu description='Busca por País' label='País' id='country' />
      <ButtonMenu description='Busca por Estado o Departamento' label='Estado' id='state' />
      <ButtonMenu description='Busca por Ciudad' label='Ciudad' id='city' />
    </div>
    <div className='Search__Filter'>
      <ButtonMenu description='Buscas Comprar o Rentar?' label='Venta o renta' id='country' />
      <ButtonMenu description='Que tipo de Holmes buscas?' label='Tipo' id='type' />
      <ButtonMenu description='Rango de Precio' label='Costo' id='cost' />
    </div>
    <ActionButton text='Buscar' />
    <br/><br/>
    <h2>Tenemos estas Opciones para ti</h2>
  </section>

);

export default Search;
