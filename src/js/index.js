import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import Layout from './components/Layout';
import '../scss/style.scss';

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Layout/>
    </Provider>,
    document.querySelector('#container')
  );
};
