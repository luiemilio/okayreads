import merge from 'lodash/merge';

import { RECEIVE_ALL_BOOKS, RECEIVE_SINGLE_BOOK } from '../actions/book_actions';

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BOOKS:
      return merge({}, state, action.books);
    case RECEIVE_SINGLE_BOOK:
      let newState = merge({}, state);
      newState[action.book.id].bookshelves = action.book.bookshelves;
      return newState;
    default:
      return state;
  }

};

export default BooksReducer;
