import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './routes/App';
import reducer from './reducers';
import generateStore from './store';

const initialState = {
  country: [],

};

const store = createStore(
  reducer, initialState,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'),
);
