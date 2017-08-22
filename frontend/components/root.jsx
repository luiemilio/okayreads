import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


export const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <h1>THIS IS THE ROOT COMPONENT</h1>
    </HashRouter>
  </Provider>
);
