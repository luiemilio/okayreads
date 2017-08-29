import React from 'react';
import StatusShowItem from  './status_show_item';
import StatusesIndex from './statuses_index';
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
            <StatusesIndex />
            <BookshelfIndexContainer />
          </div>
          {mappedBooks}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StatusShow;
