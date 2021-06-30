import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AuthContext from './auth-context';

ReactDOM.render(
  <AuthContext>
    <App />
  </AuthContext>,
  document.getElementById('root')
);
