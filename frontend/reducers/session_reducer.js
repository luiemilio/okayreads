import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

import { RECEIVE_SINGLE_BOOKSHELF, REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';
import { RECEIVE_SINGLE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, nullUser, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, { errors });
    case RECEIVE_SINGLE_BOOKSHELF:
      const newState = state;
      newState.currentUser.bookshelves.push(action.bookshelf);
      return newState;
    case REMOVE_BOOKSHELF:
      const remState = state;
      const bookshelfIdx = remState.currentUser.bookshelves.indexOf(action.bookshelf);
      remState.currentUser.bookshelves.splice(bookshelfIdx, 1);
      return remState;
    case RECEIVE_SINGLE_REVIEW:
      const revState = state;
      revState.currentUser.reviews.push(action.review);
      return revState;
    case REMOVE_REVIEW:
      const remRevState = state;
      const reviewIdx = remState.currentUser.reviews.indexOf(action.reviews);
      remState.currentUser.reviews.splice(reviewfIdx, 1);
      return remRevState;
    default:
      return state;
  }

};

export default SessionReducer;
