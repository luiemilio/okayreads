import * as APIUtil from '../util/review_util';
import { receiveActionErrors } from './error_actions';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW';
export const REMOVE_REVIEW  = 'REMOVE_REVIEW';

export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const receiveSingleReview = review => ({
  type: RECEIVE_SINGLE_REVIEW,
  review
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const requestAllReviews = () => (dispatch) => (
  APIUtil.fetchAllReviews().then(reviews => (
    dispatch(receiveAllReviews(reviews))
  ))
);


export const requestSingleReview = (review) => (dispatch) => (
  APIUtil.fetchSingleReview(review).then(review => (
    dispatch(receiveSingleReview(review))
  ))
);

export const createReview = (review) => (dispatch) => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveSingleReview(review))
  ), err => (
    dispatch(receiveActionErrors(err.responseJSON, "createReview"))
  ))
);

export const editReview = (review) => (dispatch) => (
  APIUtil.editReview(review).then(review => (
    dispatch(receiveSingleReview(review))
  ), err => (
    dispatch(receiveActionErrors(err.responseJSON, "editReview"))
  ))
);

export const deleteReview = (review) => (dispatch) => (
  APIUtil.deleteReview(review).then(review => (
    dispatch(removeReview(review))
  ))
);
