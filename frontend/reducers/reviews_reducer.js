import merge from 'lodash/merge';

import { RECEIVE_ALL_REVIEWS,
         RECEIVE_SINGLE_REVIEW,
         REMOVE_REVIEW,
         RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

export const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_SINGLE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    default:
     return state;
  }

};

export default ReviewsReducer;
