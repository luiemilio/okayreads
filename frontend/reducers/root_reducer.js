import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BooksReducer from './books_reducer';
import BookshelvesReducer from './bookshelves_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BooksReducer,
  bookshelves: BookshelvesReducer,
});

export default RootReducer;
