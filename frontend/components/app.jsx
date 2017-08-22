import React from 'react';
import SignUpContainer from './homepage/signup_container';
import BookIndexContainer from './books/book_index_container';
import HeaderContainer from './header/header_container';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>

    <Route exact path="/" component={SignUpContainer}/>
    <Route path="/books" component={BookIndexContainer} />
  </div>
);

export default App;
