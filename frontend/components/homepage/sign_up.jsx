import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.history.push('/books');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => {
      this.props.history.push('/books');
    });
  }

  render() {
    let errorMsgs;
    if (this.props.errors){
      errorMsgs = this.props.errors.map((error, idx) => {
        return (
          <h3 key={idx}>{error}</h3>
        );
      });
    }
    return (
      <div className="homepage-signup-main-div">
        <div className="homepage-signup-form-div">
          <h3>Sign Up!</h3>
          <form className="homepage-signup-form" onSubmit={ this.handleSubmit }>
            <input
              type="text"
              value={ this.state.username }
              onChange = { this.update('username') }
              placeholder="Username"/>
            <input
              type="text"
              value={ this.state.password }
              onChange = { this.update('password') }
              placeholder="Password"/>
            <input type="submit" name="" value="Submit"/>
          </form>
        </div>
        <div className="signup-errors">
          {errorMsgs}
        </div>
      </div>
    );
  }
}

export default SignUp;
