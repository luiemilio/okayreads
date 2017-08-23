import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BooksReducer from './books_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  books: BooksReducer
});

export default RootReducer;
