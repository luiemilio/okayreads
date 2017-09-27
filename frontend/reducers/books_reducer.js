import merge from 'lodash/merge';

import { RECEIVE_ALL_BOOKS, RECEIVE_SINGLE_BOOK } from '../actions/book_actions';
import { RECEIVE_SINGLE_REVIEW } from '../actions/review_actions';

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BOOKS:
    // debugger
      return merge({}, state, action.books);
    case RECEIVE_SINGLE_BOOK:
      let newState = merge({}, state);
      newState[action.book.id].bookshelves = action.book.bookshelves;
      return newState;
    case RECEIVE_SINGLE_REVIEW:
      let prevState = merge({}, state);
      prevState[action.review.book_id].reviews.push(action.review);
      return prevState;

    default:
      return state;
  }

};

export default BooksReducer;
