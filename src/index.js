import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Components
import App from './App';
// As @babel/polyfill has been deprecated
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
