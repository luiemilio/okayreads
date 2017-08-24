import React from 'react';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.book
  }

  componentDidMount() {
    this.props.requestAllBooks();
    this.props.requestAllBookshelves(this.props.currentUser);
    // debugger
  }

  handleSubmit(e) {
    e.preventDefault(e);

  }

  update(field) {

    return e => this.setState({
      [field].push(this.props.bookshelves[e.currentTarget.value])
    });
  }


  render(){
    if (this.props.book) {
      debugger
      const ownBookshelfIds = this.props.book.bookshelves.map( (bookshelf) => {
        return bookshelf.id;
      });

      const bookshelves = this.props.bookshelves.map( (bookshelf) => {
        if (ownBookshelfIds.includes(bookshelf.id)) {
          return (
            <label key={bookshelf.id}>{bookshelf.name}
              <input type="checkbox" onClick={ this.update } value={bookshelf.id} checked/>
            </label>
          );
        } else {
          return (
            <label key={bookshelf.id}>{bookshelf.name}
              <input key={bookshelf.id} onClick={ this.update } type="checkbox" value={bookshelf.id} />
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
