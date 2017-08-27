import { connect } from 'react-redux';
import { requestAllBooks, editBook } from '../../actions/book_actions';
import { requestAllBookshelves } from '../../actions/bookshelf_actions';
import { selectBookshelves } from '../../reducers/selectors';
import { requestAllReviews } from '../../actions/review_actions';
import BookShow from './book_show';

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.bookId],
    bookshelves: selectBookshelves(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestAllReviews: () => dispatch(requestAllReviews()),
    requestAllBookshelves: (user) => dispatch(requestAllBookshelves(user)),
    editBook: (book) => dispatch(editBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShow);
