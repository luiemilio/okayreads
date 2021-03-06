import React from 'react';
import StatusShowItem from  './status_show_item';
import StatusesIndexContainer from './statuses_index_container';
import BookshelfIndexContainer from '../bookshelves/bookshelf_index_container';


class StatusShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.requestAllBooks();
    this.props.requestAllBookStatuses(this.props.currentUser);
  }

  render() {
    if (this.props.books && this.props.bookIds.length > 0) {
      const books = this.props.books;

      const statusBooks = this.props.bookIds.map((statusId) => {
        return books[statusId];
      });

      const mappedBooks = statusBooks.map((book) => {
        return (<StatusShowItem key={book.id} book={book}/>);
      });

      return (
        <div className="status-show-main-div">
          <div>
            <StatusesIndexContainer />
            <BookshelfIndexContainer />
          </div>
          <ul className="status-show-ul-div">
            {mappedBooks}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="status-show-main-div">
          <div>
            <StatusesIndexContainer />
            <BookshelfIndexContainer />
          </div>
        <div>
          <h1>No books with this status</h1>
        </div>
        </div>
      );
    }
  }
}

export default StatusShow;
