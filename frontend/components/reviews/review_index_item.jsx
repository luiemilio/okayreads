import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUserReviewIds.includes(this.props.review.user_id)) {
      return (
        <div>
          <div>
            Edit and Delete Buttons
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
