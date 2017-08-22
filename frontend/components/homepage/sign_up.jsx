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
    return (
      <div className="homepage-signup-main-div">
        <div className="homepage-signup-form-div">
          <h3>Sign Up!</h3>
          <form className="homepage-signup-form" onSubmit={ this.handleSubmit }>
            <h2>{this.props.errors}</h2>
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
      </div>
    );
  }
}

export default SignUp;
