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
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((error) => {
        return (
          <p>{error}</p>
        );
      });
    }
    return (
      <div className="homepage-signup-main-div">
        <div className="homepage-signup-form-div">
          <h3>Create a free account!</h3>
          <form className="homepage-signup-form" onSubmit={ this.handleSubmit }>
            <input
              type="text"
              value={ this.state.username }
              onChange = { this.update('username') }
              placeholder="Username"/>
            <input
              type="password"
              value={ this.state.password }
              onChange = { this.update('password') }
              placeholder="Password"/>
            <input type="submit" name="" value="Sign up"/>
            <div className="signup-errors">
              {errors}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
