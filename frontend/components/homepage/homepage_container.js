import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';
import Homepage from './homepage';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
