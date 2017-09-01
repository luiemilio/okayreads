import React from 'react';
import BookshelfIndexItem from './bookshelf_index_item';
import FontAwesome from 'react-fontawesome';

const alertOptions = {
  offset: 14,
  position: 'bottom left',
  theme: 'dark',
  time: 5000,
  transition: 'scale'
};

class BookshelfIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', user_id: this.props.currentUser.id};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showAlert() {
    return () => {
      this.msg.show('Some text or component', {
        time: 2000,
        type: 'success',
      });
    };
  }

  componentDidMount(){
    this.props.requestAllBookshelves(this.props.currentUser);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBookshelf(this.state).then(() => {
      this.setState({ name: "" });
      this.showAlert();
    }).then( () => {
      this.props.removeErrors();
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
      <div className="shelves-main-div">
        <form className="add-shelf-form" onSubmit={ this.handleSubmit }>
          <input type="text"
                 onChange={ this.update('name') }
                 value={this.state.name}
                 placeholder="Add bookshelf"/>
          <input type="submit" value="Add"/>
        </form>
        <ul className="bookshelf-index">
          {bookshelves.map(bookshelf => <BookshelfIndexItem key={bookshelf.id} deleteBookshelf = {this.props.deleteBookshelf} bookshelf={bookshelf}/>)}
        </ul>
        <div>
          <span>{this.props.errors}</span>
        </div>
      </div>
    );
  }
}

export default BookshelfIndex;
