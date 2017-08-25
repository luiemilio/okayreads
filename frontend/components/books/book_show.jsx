import React from 'react';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.requestAllBooks();
    this.props.requestAllBookshelves(this.props.currentUser);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.book) {
      this.bookshelfIds = nextProps.book.bookshelves.map((bookshelf) => {
        return bookshelf.id
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const book = {id: this.props.book.id, bookshelf_ids: this.bookshelfIds};
    this.props.editBook(book);

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

  render(){
    if (this.props.book) {
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
        <div className="book-show-main-div">
          <div className="book-show-img-div">
            <img src={this.props.book.image_url}/>
            <span>Add to a bookshelf</span>
            <form onSubmit={ this.handleSubmit }>
                {bookshelves}
              <input type="submit" value="add"/>
            </form>
          </div>
          <div className="book-show-description-div">
            <h2>{this.props.book.title}</h2>
            <span>by: {this.props.book.author}</span>
            <span>Publisher: {this.props.book.publisher}</span>
            <p>{this.props.book.description}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BookShow;
