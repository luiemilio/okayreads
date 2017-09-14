import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', search: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
    this.handleAllBooksClick = this.handleAllBooksClick.bind(this);
    this.search = '';
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateSearch(){
    return e => this.setState({
      ['search']: e.currentTarget.value
    });
  }

  handleSearch(e) {
    e.preventDefault();
    if (this.state.search) {
      this.props.requestBooksFromSearch(this.state.search).then(() => {
        this.props.history.push('/search');
      });
      this.setState({['search']: ''});
    }
  }

  handleBlur() {
    this.setState({['search']: ''});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password};
    this.props.login(user).then(() => {
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

  handleAllBooksClick(e) {
    this.props.history.push('/books');
  }

  render() {
    if (this.props.loggedIn) {

      const searchTerms = this.state.search;
      // debugger

      let results = Object.values(this.props.books).map((book) => {
        if (this.state.search.length > 0 &&
            (book.title.toLowerCase().includes(searchTerms.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerms.toLowerCase())
            ) ) {
          const path = `/books/${book.id}`;
          return (
            <Link onClick={this.handleBookLink} key={book.id} to={path}>
              <li>
                <div className="result-body">
                  <img src={book.image_url}/>
                  <div className="result-details">
                    <span>{book.title}</span>
                    <span>by: {book.author}</span>
                 </div>
                </div>
              </li>
            </Link>
          );
        }
      });

      // results = results.slice(0, 6);
      // debugger


      return (
        <div className="header">
          <Link to="/">
            <div className="header-img-logo">
              <img src="https://i.imgur.com/MKQ4nC3.jpg"/>
              <h1>okayreads</h1>
            </div>
          </Link>
          <div className="header-btn-search-div">
            <button onClick={this.handleAllBooksClick}>All Books</button>
            <div className="header-search-div">
              <form onSubmit={this.handleSearch}>
                <input
                  onBlur={this.handleBlur}
                  type="text"
                  placeholder="Book search"
                  value={this.state.search}
                  onChange={this.updateSearch()}/>
              </form>
              <ul>
                {results}
              </ul>
            </div>
          </div>
          <h3>Hi, {this.props.currentUser.username}</h3>
          <button onClick={this.handleLogoutClick}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div className="header-img-logo">
            <img src="https://i.imgur.com/MKQ4nC3.jpg"/>
            <h1>okayreads</h1>
          </div>
          <form className="header-login-form" onSubmit={ this.handleSubmit }>
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
            <input type="submit" value="Sign in"/>
          </form>
          <button onClick={this.handleGuestClick}>Demo</button>
          <h3 className="errors">{this.props.errors}</h3>
        </div>
      );
    }
  }
}

export default Header;
