import React from 'react';
import Route from './routes'
import firebase from './config/config'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'

import './assets/styles/global.css'

function App() {
  return (
    <Route />
  );
}

export default App;
