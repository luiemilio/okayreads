import { connect } from 'react-redux';
import { editReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import EditReviewForm from './edit_review_form';

const mapStateToProps = (state, ownProps) => {
  const reviews = state.books[ownProps.match.params.bookId].reviews;
  const reviewObj = {};
  for ( let i = 0; i < reviews.length; i++) {
    reviewObj[reviews[i].id] = reviews[i];
  }
  return {
    currentUser: state.session.currentUser,
    book: state.books[ownProps.match.params.bookId],
    review: reviewObj[ownProps.match.params.reviewId],
    errors: state.reviews.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editReview: (review) => dispatch(editReview(review)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReviewForm));
