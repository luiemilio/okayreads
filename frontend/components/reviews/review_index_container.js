import { connect } from  'react-redux';

import { requestAllReviews, requestSingleReview,
         createReview, deleteReview, editReview } from '../../actions/review_actions';

import { selectCurrentUserReviewIds,
         selectCurrentBookReviewIds, selectAllReviews } from '../../reducers/selectors';

import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
 return {
   book: ownProps.book,
   reviews: selectAllReviews(state),
   bookReviewIds: selectCurrentBookReviewIds(state, ownProps.book.id),
   currentUserReviewIds: selectCurrentUserReviewIds(state),
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllReviews: () => requestAllReviews(),
    requestSingleReview: (review) => requestSingleReview(review),
    createReview: (review) => createReview(review),
    editReview: (review) => editReview(review),
    deleteReview: (review) => deleteReview(review),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
