import { connect } from 'react-redux';

import { requestAllReviews, requestSingleReview,
         createReview, deleteReview, editReview } from '../../actions/review_actions';

import { selectCurrentUserReviewIds,
         selectCurrentBookReviewIds, selectAllReviews } from '../../reducers/selectors';

import CreateReviewForm from './create_review_form';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
   currentUser: state.session.currentUser,
   bookId: parseInt(ownProps.match.params.bookId),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm));
