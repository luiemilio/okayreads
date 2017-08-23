import merge from 'lodash/merge';

import { RECEIVE_ALL_BOOKS, RECEIVE_SINGLE_BOOK } from '../actions/book_actions';

export const BooksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BOOKS:
      return merge({}, state, action.books);
    case RECEIVE_SINGLE_BOOK:
      return merge({}, state, action.book);
    default:
      return state;
  }

};
