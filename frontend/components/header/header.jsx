import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(e) {
    this.props.logout().then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="header">
          <div className="header-img-logo">
            <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg"/>
            <h1>okayreads</h1>
          </div>
          <h3>Hi, {this.props.currentUser.username}</h3>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="header-img-logo">
            <img src="https://cdn.pixabay.com/photo/2016/09/10/17/18/book-1659717_960_720.jpg"/>
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
          <h3 className="errors">{this.props.errors}</h3>
        </div>
      );
    }
  }
}

export default Header;
