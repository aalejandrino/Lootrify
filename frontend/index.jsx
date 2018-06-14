import React from 'react';
import ReactDOM from 'react-dom';
import { signup } from './util/session_api_util';
import { searchUsers, searchUser } from './util/search_api_util';
import { login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.searchUsers = searchUsers;
  window.logout = logout;


  ReactDOM.render(<Root store={ store }/>, root);
});
