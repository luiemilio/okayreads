import { connect } from 'react-redux';
import { selectBookshelves } from '../../reducers/selectors';
import { requestAllBookshelves,
         createBookshelf,
         deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfIndex from './bookshelf_index';

const mapStateToProps = (state) => {
  return {
    bookshelves: selectBookshelves(state),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBookshelves: (user) => dispatch(requestAllBookshelves(user)),
    createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
    deleteBookshelf: (bookshelf) => dispatch(deleteBookshelf()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
