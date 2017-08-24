import React from 'react';
import BookshelfShowItem from  './bookshelf_show_item';

class BookshelfShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllBookshelves(this.props.currentUser);
  }

  render() {
    if (this.props.bookshelf) {
      const books = this.props.bookshelf.books
      return (
        <div>
          {books.map(book => <BookshelfShowItem key={book.id} book={book}/>)}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BookshelfShow;
