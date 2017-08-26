import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttons;
    const editPath = `/books/${this.props.book.id}/${this.props.review.id}/editreview`;
    if (this.props.currentUser.id === this.props.reviewer.id) {
      buttons = <div>
                <Link to={editPath}>Edit</Link>
                </div>;
    }
    return (
      <div className="review-item">
        <span><p>{this.props.reviewer.username}</p> rated it {this.props.review.score} stars</span>
        {buttons}
        <h3>{this.props.review.title}</h3>
        <p>{this.props.review.body}</p>
      </div>
    );
  }
}

export default ReviewIndexItem;
