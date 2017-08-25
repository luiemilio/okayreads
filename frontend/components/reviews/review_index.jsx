import React from 'react';
import ReviewIndexItem from './review_index_item';
import CreateReviewFormContainer from './create_review_form_container';
import { Link } from 'react-router-dom';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviewers = this.props.reviewers;
    const reviews = this.props.reviews.map((review) => {
      for (let i = 0; i < reviewers.length; i++) {
        if (review.user_id === reviewers[i].id) {
          return (<ReviewIndexItem
            key={ review.id }
            review={review}
            currentUser={this.props.currentUser}
            deleteReview={this.props.deleteReview}
            editReview={this.props.editReview}
            reviewer={reviewers[i]}/>);
        }
      }
    });
    return (
      <div>
        <Link to="/reviews/create">
          <CreateReviewFormContainer />
        </Link>
        <h2>Reviews</h2>
        { reviews }
      </div>
    );
  }

}


export default ReviewIndex;
