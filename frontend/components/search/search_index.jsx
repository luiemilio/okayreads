import React from 'react';
import BookIndexItem from '../books/book_index_item';
import StatusesIndexContainer from '../statuses/statuses_index_container';
import BookshelfIndexContainer from '../bookshelves/bookshelf_index_container';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.books.length === 0) {
      return (
        <div className="book-search-main-div">
          <div className="book-search-side-bar">
            <StatusesIndex />
            <BookshelfIndexContainer />
          </div>
          <div className="book-search-index-main-div">
            <h2>NO BOOKS FOUND...</h2>
          </div>
        </div>
      );
    } else {
      const books = this.props.books;
      return (
        <div className="book-search-main-div">
          <div className="book-search-side-bar">
            <StatusesIndex />
            <BookshelfIndexContainer />
          </div>
          <div className="book-search-index-main-div">
            <ul>
              {books.map(book => <BookIndexItem key={book.id} book={book}/>)}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default SearchIndex;
