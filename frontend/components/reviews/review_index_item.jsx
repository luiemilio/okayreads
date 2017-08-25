import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttons;
    if (this.props.currentUser.id === this.props.reviewer.id) {
      buttons = <div>edit and delete buttons</div>;
    }
    return (
      <div>
        <span>{this.props.reviewer.username} rated it {this.props.review.score}</span>
        {buttons}
        <h3>{this.props.review.title}</h3>
        <p>{this.props.review.body}</p>
      </div>
    );
  }

}

export default ReviewIndexItem;
