import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

