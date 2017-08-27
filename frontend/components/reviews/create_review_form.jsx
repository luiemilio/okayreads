import React from 'react';

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book_id: this.props.bookId,
      user_id: this.props.currentUser.id,
      score: '',
      title: '',
      body: '',
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
    this.props.createReview(this.state).then(() => {
      this.props.history.push(`/books/${this.props.bookId}`);
    });
  }

  render() {
    return (
      <div>
        <h1>ADD REVIEW!</h1>
        <form onSubmit={this.handleSubmit}>
          <label> My rating:
            <select onChange={this.update('score')} name="score">
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

export default CreateReviewForm;
