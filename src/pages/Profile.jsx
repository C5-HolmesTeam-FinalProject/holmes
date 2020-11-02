import React from 'react';

import Layout from '../components/Layout';
import SimilarListings from '../components/SimilarListings';
import ActionButton from '../components/ActionButton';

import '../assets/styles/Profile.scss';

import photoUser from '../assets/images/ProfileForm.jpg';
import { Container, FormControl, InputLabel, Input, FormHelperText, Grid } from '@material-ui/core';

const Profile = () => {
  return (
    <>
      <Layout>

        <section className='userData'>
          <h1>Mi Perfil</h1>
        </section>

        <div className='Grid'>
          <div className='Grid__Formulario'>
            <Container className='Grid__Formulario--container'>
              <Grid container>
                <Grid item lg={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='usuario'>Usuario</InputLabel>
                    <Input id='usuario' aria-describedby='usuario-helper-text' />
                    <FormHelperText id='usuario-helper-text'>Escribe un usuario.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='nombre'>Nombre</InputLabel>
                    <Input id='nombre' aria-describedby='nombre-helper-text' />
                    <FormHelperText id='nombre-helper-text'>Escribe tu nombre.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='apellido'>Apellido</InputLabel>
                    <Input id='apellido' aria-describedby='apellido-helper-text' />
                    <FormHelperText id='apellido-helper-text'>Escribe tu apellido.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='email'>Correo</InputLabel>
                    <Input id='email' aria-describedby='email-helper-text' />
                    <FormHelperText id='email-helper-text'>Escribe tu correo electrónico.</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item md={10}>
                  <FormControl fullWidth={true}>
                    <InputLabel className='Grid__Formulario--label' htmlFor='telefono'>Telefono</InputLabel>
                    <Input id='telefono' aria-describedby='telefono-helper-text' />
                    <FormHelperText id='telefono-helper-text'>Escribe tu número telefónico.</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Container>
            {/* <form className='Grid__Formulario--form' action='' method='post'>
              <ul>
                <li>
                  <label className='labelProfile' htmlFor='name'>Nombre de Usuario:</label>
                  <input type='text' id='name' name='nombreUsuario' />
                </li>
                <li>
                  <label className='labelProfile' htmlFor='mail'>Nombre(s):</label>
                  <input type='email' id='mail' name='nombres' />
                </li>
                <li>
                  <label className='labelProfile' htmlFor='mail'>Apellidos:</label>
                  <input type='email' id='mail' name='apellidos' />
                </li>
                <li>
                  <label className='labelProfile' htmlFor='mail'>Email:</label>
                  <input type='email' id='mail' name='email' />
                </li>
                <li>
                  <label className='labelProfile' htmlFor='mail'>Telefono:</label>
                  <input type='email' id='mail' name='telefono' />
                </li>
              </ul>
            </form> */}
          </div>

          <div className='Grid__Imagen'>
            <img className='Grid__Imagen--usuario' src={photoUser} alt='' />
            <div className='Grid__Imagen--btnCambiar'>
              <ActionButton text='Cambiar Imágen' />
            </div>
          </div>
          <div className='Grid__Cambios'>
            <div className='Grid__BotonCambios'>
              <ActionButton text='Guardar cambios' />
            </div>
          </div>
          <div className='Grid__imagen--contraseña'>
            <ActionButton text='Cambiar Contraseña' mode='darkred' />
          </div>
        </div>

        <div className='Mis__Publicaciones'>
          <h1>Mis Publicaciones</h1>
        </div>
        <div className='Grid__MisFavoritos'>
          <SimilarListings />
        </div>

        <div className='Mis__Favoritos'>
          <h1>Mis Favoritos</h1>
        </div>

        <div className='Grid__Publicaciones'>
          <SimilarListings />
        </div>

      </Layout>

    </>
  );
};

export default Profile;
