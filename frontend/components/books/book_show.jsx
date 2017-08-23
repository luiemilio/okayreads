import React from 'react';

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllBooks();
  }

  render(){
    if (this.props.book) {
      // debugger
      return (
        <div className="book-show-main-div">
          <div className="book-show-img-div">
            <img src={this.props.book.image_url}/>
          </div>
          <div className="book-show-description-div">
            <h2>{this.props.book.title}</h2>
            <span>by: {this.props.book.author}</span>
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
