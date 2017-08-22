import React from 'react';
import ReactDom from 'react-dom';
import { Root } from './components/root';
import { signup, login, logout } from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  const root = document.getElementById('root');
  ReactDom.render(<Root/>, root);
});
