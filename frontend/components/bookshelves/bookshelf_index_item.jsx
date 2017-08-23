import React from 'react';
import { Link } from 'react-router-dom';

class BookshelfIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    // debugger
    return (
      <li>
          {this.props.bookshelf.name}
      </li>
    );
  }
}

export default BookshelfIndexItem;
