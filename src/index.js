import React from 'react';
import { BrowserRouter, Route, Switch , HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
