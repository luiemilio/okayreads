import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: ownProps.reviews,
    reviewers: ownProps.reviewers,
    currentUser: state.session.currentUser,
    book: ownProps.book,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteReview: (review) => dispatch(deleteReview(review)),
    editReview: (review) => dispatch(editReview(review))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
