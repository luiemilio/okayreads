import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';
import { requestBooksFromSearch } from '../../actions/search_actions';
import Header from './header';

const mapStateToProps = ({ session, books }) => {
  return {
    currentUser: session.currentUser,
    loggedIn: Boolean(session.currentUser),
    errors: session.errors.login,
    books: books
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
    requestBooksFromSearch: (searchTerm) => dispatch(requestBooksFromSearch(searchTerm)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
