import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';

class BookshelfIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', user_id: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestAllBookshelves(this.props.currentUser);
  }

  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createBookshelf(this.state).then(() => {
      this.setState({ name: "" });
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const bookshelves = this.props.bookshelves;
    return (
      <div>
        <form className="add-shelf-form" onSubmit={ this.handleSubmit }>
          <span>Add a Bookshelf</span>
          <input type="text"
                 onChange={ this.update('name') }
                 value={this.state.name}/>
          <input type="submit"
                 value="add"/>
        </form>
        <ul className="bookshelf-index">
          {bookshelves.map(bookshelf => <BookshelfIndexItem key={bookshelf.id} deleteBookshelf = {this.props.deleteBookshelf} bookshelf={bookshelf}/>)}
        </ul>
      </div>
    );
  }
}

export default BookshelfIndex;
