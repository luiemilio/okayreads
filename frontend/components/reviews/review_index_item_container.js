import { connect } from  'react-redux';

import { requestAllReviews, requestSingleReview,
         createReview, deleteReview, editReview } from '../../actions/review_actions';

import { selectCurrentUserReviewIds,
         selectCurrentBookReviewIds, selectAllReviews } from '../../reducers/selectors';

import ReviewIndexItem from './review_index_item';

const mapStateToProps = (state, ownProps) => {
 return {
   review: ownProps.review,
   currentUserReviewIds: selectCurrentUserReviewIds(state),
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestSingleReview: (review) => dispatch(requestSingleReview(review)),
    deleteReview: (review) => dispatch(deleteReview(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem);
