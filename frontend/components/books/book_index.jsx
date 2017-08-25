import React from 'react';
import BookIndexItem from './book_index_item';
import BookshelfIndexContainer from '../bookshelves/bookshelf_index_container';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBooks();
  }

  render(){
    const books = this.props.books;
    return (
      <div className="book-index-main-div">
        <BookshelfIndexContainer />
        <ul className="book-index">
          {books.map(book => <BookIndexItem key={book.id} book={book}/>)}
        </ul>
      </div>
    );
  }
}

export default BookIndex;
