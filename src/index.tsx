import React from 'react';
import ReactDOM from 'react-dom'

import store from './App/store';
import { Provider } from 'react-redux'

import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

import './Stylesheets/Fonts.css'
import './Stylesheets/Colors.css'

import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);