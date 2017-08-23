import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

class BookshelfIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllBookshelves(this.props.currentUser);
  }

  render() {
    const bookshelves = this.props.bookshelves;
    return (
      <div>
        <ul className="bookshelf-index">
          {bookshelves.map(bookshelf => <BookshelfIndexItem key={bookshelf.id} bookshelf={bookshelf}/>)}
        </ul>
      </div>
    );
  }
}

export default BookshelfIndex;
