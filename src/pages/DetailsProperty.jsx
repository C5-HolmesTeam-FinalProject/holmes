import React from 'react';
import Carousel from '../components/Carousel';
import SimilarListings from '../components/SimilarListings';
import DetailBar from '../components/DetailsBar';
import Features from '../components/Features';
import Layout from '../components/Layout';

const DetailsProperty = () => (
  <>
    <Layout>
      <Carousel />
      <DetailBar />

      <Features feature='Sala de Juegos' />
      <h4 className='CardsTitle'>Sugerencias</h4>
      <div className='Cardss'>
        <SimilarListings />
      </div>

    </Layout>
  </>
);

export default DetailsProperty;
