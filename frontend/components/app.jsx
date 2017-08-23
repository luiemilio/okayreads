import React from 'react';
import SignUpContainer from './homepage/signup_container';
import BookIndexContainer from './books/book_index_container';
import HeaderContainer from './header/header_container';
import BookShowContainer from './books/book_show_container';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <Switch>
      <Route exact path="/books" component={BookIndexContainer} />
      <Route exact path="/" component={SignUpContainer}/>
      <Route exact path="/books/:bookId" component={BookShowContainer} />
    </Switch>
  </div>
);

export default App;
