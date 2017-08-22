import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup } from '../../actions/session_actions';
import SignUp from './sign_up';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    loggedIn: Boolean(session.currentUser),
    errors: session.errors.signup,
   };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
