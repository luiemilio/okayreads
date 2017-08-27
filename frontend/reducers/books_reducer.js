import merge from 'lodash/merge';

import { RECEIVE_ALL_BOOKS, RECEIVE_SINGLE_BOOK } from '../actions/book_actions';
import { RECEIVE_SINGLE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const BooksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BOOKS:
      return merge({}, state, action.books);
    case RECEIVE_SINGLE_BOOK:
      let newState = merge({}, state);
      newState[action.book.id].bookshelves = action.book.bookshelves;
      return newState;
    case RECEIVE_SINGLE_REVIEW:
      const revState = state;
      revState[action.review.book_id].reviews.push(action.review);
      return revState;
    case REMOVE_REVIEW:
      debugger
      const remRevState = state;
      const reviewIdx = remRevState[action.review.book_id].reviews.indexOf(action.review);
      remRevState[action.review.book_id].reviews.splice(reviewIdx, 1);
      return remRevState;
    default:
      return state;
  }

};

export default BooksReducer;
