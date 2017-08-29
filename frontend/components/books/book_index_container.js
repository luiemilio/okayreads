import { connect } from 'react-redux';
import { selectAllBooks } from '../../reducers/selectors';
import { requestAllBooks, requestSingleBook } from '../../actions/book_actions';
import { requestAllBookStatuses } from '../../actions/book_read_status_actions';
import BookIndex from './book_index';

const mapStateToProps = (state) => {
  return {
    books: selectAllBooks(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestSingleBook: (book) => dispatch(requestSingleBook()),
    requestAllBookStatuses: (user) => dispatch(requestAllBookStatuses(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
