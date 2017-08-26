import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import CreateReviewForm from './create_review_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    book: state.books[ownProps.match.params.bookId],
    errors: state.reviews.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm));
