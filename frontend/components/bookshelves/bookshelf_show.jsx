import React from 'react';

class BookshelfShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllBookshelves(this.props.currentUser);
  }

  render() {
    if (this.props.bookshelf) {
      return (
        <div>BOOKS WILL GO HERE</div>
      );
    } else {
      return null;
    }
  }
}

export default BookshelfShow;
