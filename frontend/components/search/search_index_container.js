import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchIndex from './search_index';

const mapStateToProps = (state) => {
  return {
    books: state.searchedBooks,
   };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   };
// };

export default withRouter(connect(mapStateToProps, null)(SearchIndex));
