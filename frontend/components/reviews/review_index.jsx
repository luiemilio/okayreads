import React from 'react';
import ReviewIndexItemContainer from './review_index_item_container';
import CreateReviewFormContainer from './create_review_container';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const reviews = this.props.reviews.map((review) => {
      if (this.props.bookReviewIds.includes(review.id)) {
        return (
          <ReviewIndexItemContainer key={review.id} review={review}/>
        );
      }
    });

    const path = `/books/${this.props.book.id}/createreview`;

    return (
      <div className="review-index-main-div">
        <div className="review-index-main-div-link">
          <Link to={path}>Add Review</Link>
        </div>
        {reviews}
      </div>
    );
  }
}

export default ReviewIndex;
