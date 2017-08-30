import React from 'react';
import ReactDom from 'react-dom';
import { Root } from './components/root';
import configureStore from './store/store';
import { requestBooksFromSearch } from './actions/search_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.requestBooksFromSearch = requestBooksFromSearch;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDom.render(<Root store={ store } />, root);
});
