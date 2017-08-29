import React from 'react';
import BookshelfShowItem from  './bookshelf_show_item';
import BookshelfIndexContainer from './bookshelf_index_container';

class BookshelfShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllBookshelves(this.props.currentUser);
  }

  render() {
    if (this.props.bookshelf) {
      const books = this.props.bookshelf.books;
      return (
        <div className="bookshelf-show-main-div">
          <BookshelfIndexContainer />
          {books.map(book => <BookshelfShowItem key={book.id} book={book}/>)}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BookshelfShow;
