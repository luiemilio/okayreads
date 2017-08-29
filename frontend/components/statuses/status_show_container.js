import { connect } from  'react-redux';
import StatusShow from './status_show';
import { getBooksfromStatus } from '../../reducers/selectors';
import { requestAllBooks } from '../../actions/book_actions';
import { requestAllBookStatuses } from '../../actions/book_read_status_actions';

const mapStateToProps = (state, ownProps) => {
 return {
   books: state.books,
   bookIds: getBooksfromStatus(state, ownProps.match.params.statusType),
   currentUser: state.session.currentUser,
 };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestAllBookStatuses: (user) => dispatch(requestAllBookStatuses(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusShow);
