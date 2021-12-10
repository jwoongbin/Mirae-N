import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Common from './components/Common';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
    (<Router>
        <App />
      </Router>),
  document.getElementById('root')
);
