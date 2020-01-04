import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import homePage from './pages/home-page';


ReactDOM.render(
  <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <Route exact path="/" component={homePage} />
    </BrowserRouter>
    <div>{process.env.PUBLIC_URL}</div>
  </div>,
  document.getElementById('root')
);


// Learn more about service workers in CRA: http://bit.ly/CRA-PWA
serviceWorker.default();
