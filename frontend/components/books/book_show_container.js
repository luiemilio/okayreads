import { connect } from 'react-redux';
import { requestAllBooks } from '../../actions/book_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.bookId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBooks: () => dispatch(requestAllBooks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
