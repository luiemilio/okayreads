import React from 'react';
import SignUpContainer from './homepage/signup_container';
import BookIndexContainer from './books/book_index_container';
import HeaderContainer from './header/header_container';
import BookShowContainer from './books/book_show_container';
import BookshelfIndexContainer from './bookshelves/bookshelf_index_container';
import BookshelfShowContainer from './bookshelves/bookshelf_show_container';
import CreateReviewContainer from './reviews/create_review_container';
import EditReviewContainer from './reviews/edit_review_container';
import StatusShowContainer from './statuses/status_show_container';
import { AuthRoute } from '../util/route_util';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/books/:bookId/createreview/" component={CreateReviewContainer}/>
      <AuthRoute exact path="/books/:bookId/editreview/:reviewId" component={EditReviewContainer}/>
      <AuthRoute exact path="/books" component={BookIndexContainer} />
      <AuthRoute exact path="/books/:bookId" component={BookShowContainer} />
      <Route exact path="/" component={SignUpContainer}/>
      <AuthRoute exact path="/bookshelves/:bookshelfId" component={BookshelfShowContainer}/>
      <AuthRoute exact path="/statuses/:statusType" component={StatusShowContainer}/>
    </Switch>
  </div>
);

export default App;
