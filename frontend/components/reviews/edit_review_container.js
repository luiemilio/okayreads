import { connect } from 'react-redux';

import { requestAllReviews, requestSingleReview,
         createReview, deleteReview, editReview } from '../../actions/review_actions';

import { requestAllBooks } from '../../actions/book_actions';

import { selectCurrentUserReviewIds,
         selectCurrentBookReviewIds, selectAllReviews } from '../../reducers/selectors';

import EditReviewForm from './edit_review_form';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
   review: state.reviews[ownProps.match.params.reviewId],
   book: state.books[state.reviews[ownProps.match.params.reviewId].book_id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editReview: (review) => dispatch(editReview(review)),
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestAllBooks: () => dispatch(requestAllBooks()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReviewForm));
