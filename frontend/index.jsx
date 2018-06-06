import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import { login } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.signup = signup;
  window.login = login;
  // window.logout = logout;

  ReactDOM.render(<Root store={ store }/>, root);
});
