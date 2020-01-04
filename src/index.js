import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Routes } from './routes';
import './index.css';
import store from './store';


ReactDOM.render(
  <div className="App">
      
        <Routes />
      
  </div>,
  document.getElementById('root')
);


// Learn more about service workers in CRA: http://bit.ly/CRA-PWA
serviceWorker.default();
