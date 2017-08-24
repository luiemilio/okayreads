import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault(e);
    this.props.deleteBookshelf(this.props.bookshelf);
  }

  render() {
    return (
      <li>
        <Link to={`/bookshelves/${this.props.bookshelf.id}`}>
          {this.props.bookshelf.name}
        </Link>
          <button onClick={this.handleClick}> X</button>
      </li>
    );
  }
}

export default BookshelfIndexItem;
