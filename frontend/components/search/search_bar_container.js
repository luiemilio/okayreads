import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';
import { requestBooksFromSearch } from '../../actions/search_actions';
import SearchBar from './header';

const mapStateToProps = ({ session }) => {
  
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestBooksFromSearch: (searchTerm) => dispatch(requestBooksFromSearch(searchTerm)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
