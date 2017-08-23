import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
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

  handleLogoutClick(e) {
    this.props.logout().then(() => {
      this.props.history.push('/');
    });
  }

  handleGuestClick(e) {
    const guest = {username: "guest", password: "password"};
    this.props.login(guest).then(() => {
      this.props.history.push('/books');
    });
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="header">
          <div className="header-img-logo">
            <img src="http://i.imgur.com/MKQ4nC3.jpg"/>
            <h1>okayreads</h1>
          </div>
          <h3>Hi, {this.props.currentUser.username}</h3>
          <button onClick={this.handleLogoutClick}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="header-img-logo">
            <img src="http://i.imgur.com/MKQ4nC3.jpg"/>
            <h1>okayreads</h1>
          </div>
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
            <input type="submit" value="Sign in"/>
          </form>
          <button onClick={this.handleGuestClick}>Guest</button>
          <h3 className="errors">{this.props.errors}</h3>
        </div>
      );
    }
  }
}

export default Header;
