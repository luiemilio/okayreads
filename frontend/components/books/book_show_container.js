import { connect } from 'react-redux';
import { requestAllBooks, editBook } from '../../actions/book_actions';
import { requestAllBookshelves } from '../../actions/bookshelf_actions';
import { selectBookshelves, selectBookStatuses } from '../../reducers/selectors';
import { requestAllReviews } from '../../actions/review_actions';
import { requestAllBookStatuses, updateBookStatus } from '../../actions/book_read_status_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.bookId],
    bookshelves: selectBookshelves(state),
    currentUser: state.session.currentUser,
    bookStatusesObj: state.bookStatuses,
    bookStatusArr: selectBookStatuses(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestAllBookshelves: (user) => dispatch(requestAllBookshelves(user)),
    requestAllBookStatuses: (user) => dispatch(requestAllBookStatuses(user)),
    editBook: (book) => dispatch(editBook(book)),
    updateBookStatus: (status) => dispatch(updateBookStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
