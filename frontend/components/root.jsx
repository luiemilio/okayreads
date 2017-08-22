import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';


export const Root = () => (
  <Provider>
    <HashRouter>
      <h1>THINGS ARENT WORKING, HALP PLZ</h1>
    </HashRouter>
  </Provider>
);
