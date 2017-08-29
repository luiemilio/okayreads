import merge from 'lodash/merge';

import { RECEIVE_ALL_BOOK_STATUSES,
         RECEIVE_SINGLE_BOOK_STATUS } from '../actions/book_read_status_actions';

export const BookStatusesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_BOOK_STATUSES:
      return action.bookStatuses;
    case RECEIVE_SINGLE_BOOK_STATUS:
      return merge({}, status, {[action.bookStatus.id]: action.bookStatus});
    default:
      return state;
  }
};

export default BookStatusesReducer;
