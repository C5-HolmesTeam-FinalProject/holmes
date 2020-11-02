import React, { children } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <Header mode='dark' />
    {children}
    <Footer title='Haz tus sueños una realidad' />
  </div>
);

export default Layout;
