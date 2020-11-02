import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DetailsProperty from '../pages/DetailsProperty';
import AddPost from '../pages/AddPost';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Landing from '../pages/Landing';
import Developers from '../pages/Developers';

import '../assets/styles/GlobalStyles.scss';

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/detailsproperty' component={DetailsProperty} />
      <Route exact path='/addpost' component={AddPost} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/landing' component={Landing} />
      <Route exact path='/developers' component={Developers} />
      <Route component={NotFound} />
    </Switch>

  </BrowserRouter>
);

export default App;
