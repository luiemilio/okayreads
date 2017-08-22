import React from 'react';
import SignUpContainer from './homepage/signup_container';
import BooksContainer from './books/books_container';
import HeaderContainer from './header/header_container';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>

    <Route exact path="/" component={SignUpContainer}/>
    <Route path="/books" component={BooksContainer} />
  </div>
);

export default App;
