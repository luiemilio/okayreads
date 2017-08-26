import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

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
          <button onClick={this.handleClick}>
            <FontAwesome name="trash" className="fa fa-trash-o" aria-hidden="true" />
          </button>
      </li>
    );
  }
}

export default BookshelfIndexItem;
