import React from 'react';
import { Link } from 'react-router-dom';
import EditReviewContainer from './edit_review_container';
import StarRatingComponent from 'react-star-rating-component';

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
        <div className="review-index-item-main-div">
          <div className="review-index-item-buttons">
            <EditReviewContainer
              reviewId={this.props.review.id}
              />
            <button onClick={this.handleClick} className="review-index-item-buttons-delete">Delete</button>
          </div>
          <div>
            <h1 className="user-star-rating">
              <span className="username">{this.props.review.user.username}</span>
              rated it
              <StarRatingComponent
                className="review-rating"
                name="book-rating"
                starCount={5}
                value={this.props.review.score}
                editing={false}
                />
            </h1>
            <h3>{this.props.review.title}</h3>
            <p>{this.props.review.body}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="review-index-item-main-div">
          <div>
            <button></button>
          </div>
          <div>
            <h1 className="user-star-rating">
              <span className="username">{this.props.review.user.username}</span>
              rated it
              <StarRatingComponent
                className="review-rating"
                name="book-rating"
                starCount={5}
                value={this.props.review.score}
                editing={false}
                />
            </h1>
            <h3>{this.props.review.title}</h3>
            <p>{this.props.review.body}</p>
          </div>
        </div>
      );
    }
  }
}

export default ReviewIndexItem;
