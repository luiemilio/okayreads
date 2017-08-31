import { connect } from 'react-redux';

import { requestAllReviews, requestSingleReview,
         createReview, deleteReview, editReview } from '../../actions/review_actions';

import { selectCurrentUserReviewIds,
         selectCurrentBookReviewIds, selectAllReviews } from '../../reducers/selectors';

import { removeErrors } from '../../actions/error_actions';

import { requestAllBooks } from '../../actions/book_actions';

// import CreateReviewForm from './create_review_form';
import CreateReviewModal from './modals/create_review_modal';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
   currentUser: state.session.currentUser,
   bookId: parseInt(ownProps.match.params.bookId),
   book: state.books[parseInt(ownProps.match.params.bookId)],
   errors: state.errors.createReview,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
    requestAllBooks: () => dispatch(requestAllBooks()),
    removeErrors: () => dispatch(removeErrors()),
    requestAllReviews: () => dispatch(requestAllReviews()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReviewModal));
