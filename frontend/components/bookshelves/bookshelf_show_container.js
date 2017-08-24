import { connect } from 'react-redux';
import { selectBookshelves } from '../../reducers/selectors';
import { requestAllBookshelves,
         createBookshelf,
         deleteBookshelf } from '../../actions/bookshelf_actions';
import BookshelfShow from './bookshelf_show';

const mapStateToProps = (state, ownProps) => {
  return {
    bookshelf: state.bookshelves[ownProps.match.params.bookshelfId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBookshelves: (user) => dispatch(requestAllBookshelves(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfShow);
