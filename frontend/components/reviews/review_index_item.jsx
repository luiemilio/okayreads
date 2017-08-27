import React from 'react';
import { Link } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.deleteReview(this.props.review);
  }

  render() {
    const editPath = `/books/${this.props.review.book_id}/editreview/${this.props.review.id}`;
    if (this.props.currentUserReviewIds.includes(this.props.review.user_id)) {
      return (
        <div>
          <div>
            <Link to={editPath}>
              Edit
            </Link>
            <button onClick={this.handleClick}>Delete</button>
          </div>
          <div>
            <h1>{this.props.review.score}</h1>
            <h3>{this.props.review.title}</h3>
            <p>{this.props.review.body}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h1>{this.props.review.score}</h1>
            <h3>{this.props.review.title}</h3>
            <p>{this.props.review.body}</p>
          </div>
        </div>
      );
    }
  }
}

export default ReviewIndexItem;
