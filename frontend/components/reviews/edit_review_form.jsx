import React from 'react';

class EditReviewForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { id: this.props.review.id,
                   user_id: this.props.currentUser.id,
                   book_id: this.props.book.id,
                   title: this.props.review.title,
                   body: this.props.review.body,
                   score: this.props.review.score };

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
      this.props.history.push(`/books/${this.props.book.id}`);
    });
  }

  render() {
    const errors = this.props.errors;
    const mappedErrors = errors.map((error) => {
      return (<span>{error}</span>);
    });

    const scoreArr = [1,2,3,4,5];
    const options = scoreArr.map((score) => {
      if (score === this.props.review.score) {
        return (<option key={score} defaultValue={score}>{score}</option>);
      } else {
        return (<option key={score} value={score}>{score}</option>);
      }
    });

    return (
      <div className="edit-review-form-main-div">
        <div className="edit-review-errors">
          { mappedErrors }
       </div>
        <form className="edit-review-form" onSubmit={this.handleSubmit}>
          <label> My rating:
            <select onChange={this.update('score')} value={this.state.score}>
              <option></option>
              {options}
            </select>
          </label>
          <input type="text"
                 onChange={this.update('title')}
                 value={this.state.title}
                 placeholder="Subject"/>
          <textarea rows="8" cols="80"
                    onChange={this.update('body')}
                    value={this.state.body}
                    placeholder="What did you think about this book?"></textarea>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default EditReviewForm;
