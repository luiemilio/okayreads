import { connect } from 'react-redux';
import { selectBookshelves } from '../../reducers/selectors';
import { requestAllBookshelves,
         createBookshelf,
         deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';
import { removeErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    bookshelves: selectBookshelves(state),
    currentUser: state.session.currentUser,
    errors: state.errors.createBookshelf,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBookshelves: (user) => dispatch(requestAllBookshelves(user)),
    createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
    deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf(bookshelf)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
