import merge from 'lodash/merge';

import { RECEIVE_BOOKS_FROM_SEARCH } from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BOOKS_FROM_SEARCH:
      return action.books;
    default:
      return state;
  }

};

export default SearchReducer;
