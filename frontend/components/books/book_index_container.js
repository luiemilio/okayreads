import { connect } from 'react-redux';
import { selectAllBooks } from '../../reducers/selectors';
import { requestAllBooks, requestSingleBook } from '../../actions/book_actions';
import BookIndex from './book_index';

const mapStateToProps = (state) => {
  return {
    books: selectAllBooks(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestSingleBook: (book) => dispatch(requestSingleBook()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
