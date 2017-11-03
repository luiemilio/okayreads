import React from 'react';
import BookIndexItem from './book_index_item';
import BookshelfIndexContainer from '../bookshelves/bookshelf_index_container';
import StatusesIndexContainer from '../statuses/statuses_index_container';
import getBooksfromStatus from '../../reducers/selectors.js';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBooks();
    this.props.requestAllBookStatuses(this.props.currentUser);
  }

  render(){
    const books = this.props.books;
    return (
      <div className="book-index-main-div">
        <div className="book-index-side-bar">
          <StatusesIndexContainer />
          <BookshelfIndexContainer />
        </div>
        <div>
          <ul className="book-index">
            {books.map(book => <BookIndexItem key={book.id} book={book}/>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default BookIndex;
