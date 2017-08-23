import React from 'react';
import ReactDom from 'react-dom';
import { Root } from './components/root';
import configureStore from './store/store';
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
// import { fetchAllBooks, fetchSingleBook } from './util/book_util';
// import { requestAllBooks, requestSingleBook } from './actions/book_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.signup = signup;
  // window.login = login;
  window.logout = logout;
  // window.requestAllBooks = requestAllBooks;
  // window.requestSingleBook = requestSingleBook;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDom.render(<Root store={ store } />, root);
});
