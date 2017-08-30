import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BooksReducer from './books_reducer';
import BookshelvesReducer from './bookshelves_reducer';
import ReviewsReducer from './reviews_reducer';
import ErrorsReducer from './errors_reducer';
import BookStatusesReducer from './book_read_statuses_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BooksReducer,
  bookshelves: BookshelvesReducer,
  reviews: ReviewsReducer,
  errors: ErrorsReducer,
  bookStatuses: BookStatusesReducer,
  searchedBooks: SearchReducer,
});

export default RootReducer;
