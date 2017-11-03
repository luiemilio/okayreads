import { connect } from  'react-redux';
import { getBooksfromStatus } from '../../reducers/selectors';
import StatusesIndex from './statuses_index';

const mapStateToProps = (state, ownProps) => {
 return {
   readBookIds: getBooksfromStatus(state, "read"),
   readingBookIds: getBooksfromStatus(state, "reading"),
   unreadBookIds: getBooksfromStatus(state, "unread"),
 };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     requestAllBooks: () => dispatch(requestAllBooks()),
//     requestAllBookStatuses: (user) => dispatch(requestAllBookStatuses(user)),
//   };
// };

export default connect(mapStateToProps, null)(StatusesIndex);
