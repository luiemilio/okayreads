import merge from 'lodash/merge';

import { RECEIVE_ALL_REVIEWS,
         RECEIVE_SINGLE_REVIEW,
         REMOVE_REVIEW,
         RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';

const nullReviews = {
  reviews: {},
  errors: []
};

export const ReviewsReducer = (state = nullReviews, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_SINGLE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      delete newState[`${action.review.id}`];
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, nullReviews, { errors });
    default:
     return state;
  }

};

export default ReviewsReducer;
