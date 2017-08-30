import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchIndex from './search_index';
import { selectAllBooksFromSearch } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    books: selectAllBooksFromSearch(state),
   };
};

export default withRouter(connect(mapStateToProps, null)(SearchIndex));
