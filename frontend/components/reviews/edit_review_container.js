import { connect } from 'react-redux';

import { requestAllReviews, requestSingleReview,
         createReview, deleteReview, editReview } from '../../actions/review_actions';

import { selectCurrentUserReviewIds,
         selectCurrentBookReviewIds, selectAllReviews } from '../../reducers/selectors';

import EditReviewForm from './edit_review_form';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
   review: state.reviews[ownProps.match.params.reviewId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editReview: (review) => dispatch(editReview(review)),
    requestAllReviews: () => dispatch(requestAllReviews()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReviewForm));
