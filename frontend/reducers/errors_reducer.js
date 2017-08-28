import merge from 'lodash/merge';

import { RECEIVE_ACTION_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

export const ErrorsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ACTION_ERRORS:
      return merge({}, action.errors);
    case CLEAR_ERRORS:
      return {};
    default:
     return state;
  }
};

export default ErrorsReducer;
