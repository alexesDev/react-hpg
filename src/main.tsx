import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

render(tree, document.getElementById('root'));
