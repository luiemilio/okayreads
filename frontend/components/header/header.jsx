import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    this.props.login(this.state).then(() => {
      this.props.history.push('/books');
    });
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="header">
          <h1>okayreads</h1>
          <h3>Hi, {this.props.currentUser.username}</h3>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="header">
          <h1>okayreads</h1>
          <form className="header-login-form" onSubmit={ this.handleSubmit }>
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
            <input type="submit" name="" value="Sign in"/>
          </form>
        </div>
      );
    }
  }
}

export default Header;
