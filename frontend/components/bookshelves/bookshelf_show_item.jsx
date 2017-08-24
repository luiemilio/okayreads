import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfShowItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/books/${this.props.book.id}`}>
          <img src={this.props.book.image_url}/>
        </Link>
      </li>
    );
  }
}

export default BookshelfShowItem;
