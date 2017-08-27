import merge from 'lodash/merge';

import { RECEIVE_ALL_BOOKSHELVES,
         RECEIVE_SINGLE_BOOKSHELF,
         REMOVE_BOOKSHELF } from '../actions/bookshelf_actions';

export const BookshelvesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BOOKSHELVES:
      return merge({}, action.bookshelves);
    case RECEIVE_SINGLE_BOOKSHELF:
      return merge({}, state, {[action.bookshelf.id]: action.bookshelf});
    case REMOVE_BOOKSHELF:
      const newState = merge({}, state);
      delete newState[`${action.bookshelf.id}`];
      return newState;
    default:
     return state;
  }

};

export default BookshelvesReducer;
