import React from 'react';
import ReviewIndexContainer from '../reviews/review_index_container';
import AlertContainer from 'react-alert';
import BookshelfIndexContainer from '../bookshelves/bookshelf_index_container';
import StatusesIndex from '../statuses/statuses_index';


class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'light',
      time: 5000,
      transition: 'scale'
    };
  }

  showAlert() {
    this.msg.show('Bookshelves updated!', {
      time: 2000,
      type: 'success',
    });
  }

  componentDidMount() {
    this.props.requestAllBooks();
    this.props.requestAllReviews();
    this.props.requestAllBookshelves(this.props.currentUser);
    this.props.requestAllBookStatuses(this.props.currentUser);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.book) {
      this.bookshelfIds = nextProps.book.bookshelves.map((bookshelf) => {
        return bookshelf.id;
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const book = {
                  id: this.props.book.id,
                  bookshelf_ids: this.bookshelfIds.concat("")
                };
    this.props.editBook(book);
    this.showAlert();

  }

  update(e) {
    const selectedValue = parseInt(e.currentTarget.value);
    if (this.bookshelfIds.includes(selectedValue)) {
      const valueIdx = this.bookshelfIds.indexOf(selectedValue);
      this.bookshelfIds.splice(valueIdx, 1);
    } else {
      this.bookshelfIds.push(selectedValue);
    }
  }

  handleChange(e) {
    const selectedValue = e.currentTarget.value;
    this.props.updateBookStatus({ id: this.currentStatusId,
                                  user_id: this.props.currentUser.id,
                                  book_id: this.props.book.id,
                                  status: selectedValue });
  }


  render(){
    if (this.props.book) {

      let currentStatus;
      let currentStatusId;

      const allStatusIds = this.props.book.book_read_statuses.map((status) => {
        return status.id;
      });

      const ownStatusIds = Object.keys(this.props.bookStatusesObj);

      ownStatusIds.forEach((ownStatusId) => {
        if (allStatusIds.includes(parseInt(ownStatusId))) {
          currentStatus = this.props.bookStatusesObj[ownStatusId];
          currentStatusId = ownStatusId;
        }
      });

      this.currentStatus = currentStatus;
      this.currentStatusId = currentStatusId;

      const ownBookshelfIds = this.props.book.bookshelves.map( (bookshelf) => {
        return bookshelf.id;
      });

      const bookshelves = this.props.bookshelves.map( (bookshelf) => {
        if (ownBookshelfIds.includes(bookshelf.id)) {
          return (
            <label key={bookshelf.id}>{bookshelf.name}
              <input type="checkbox" onChange={ this.update } value={bookshelf.id} defaultChecked/>
            </label>
          );
        } else {
          return (
            <label key={bookshelf.id}>{bookshelf.name}
              <input key={bookshelf.id} onChange={ this.update } type="checkbox" value={bookshelf.id} />
            </label>

          );
        }
      });

      return (
        <div className="book-show-all">
          <div className="book-show-side-bar">
            <StatusesIndex />
            <BookshelfIndexContainer />
          </div>
          <div className="book-show-main-div">
            <div className="book-show-img-div">
              <img src={this.props.book.image_url}/>
              <div className="book-show-bookshelf-div">
                <span>Add to a bookshelf</span>
                <form onSubmit={ this.handleSubmit }>
                  {bookshelves}
                  <input type="submit" value="Update"/>
                </form>
                <div>
                  <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                </div>
              </div>
            </div>
            <div className="book-show-description-div">
              <h2>{this.props.book.title}</h2>
              <span>by: {this.props.book.author}</span>
              <span>Publisher: {this.props.book.publisher}</span>
              <div>
                <label className="book-show-status-label"> Status:
                  <select onChange={this.handleChange} name="status" defaultValue={currentStatus.status}>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                    <option value="reading">Currently reading</option>
                  </select>
                </label>
              </div>
              <p>{this.props.book.description}</p>
              <ReviewIndexContainer book={this.props.book}/>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BookShow;
