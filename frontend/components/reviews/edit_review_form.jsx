import React from 'react';

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.review.id,
      book_id: this.props.review.book_id,
      user_id: this.props.review.user_id,
      score: this.props.review.score,
      title: this.props.review.title,
      body: this.props.review.body,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editReview(this.state).then(() => {
      this.props.history.push(`/books/${this.props.review.book_id}`);
    });
  }

  render() {
    return (
      <div>
        <h1>EDIT REVIEW!</h1>
        <form onSubmit={this.handleSubmit}>
          <label> My rating:
            <select onChange={this.update('score')} name="score" defaultValue={this.props.review.score}>
              <option></option>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">5</option>
            </select>
          </label>
          <input onChange={this.update('title')}
            value={this.state.title}
            type="text"
            placeholder="Subject"/>
          <textarea onChange={this.update('body')}
            value={this.state.body}
            placeholder="Review"/>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default EditReviewForm;
