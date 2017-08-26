import React from 'react';

class CreateReviewForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { user_id: this.props.currentUser.id,
                   book_id: this.props.book.id,
                   title: '',
                   body: '',
                   score: '' };

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
      this.props.history.push(`/books/${this.props.book.id}`);
    });
  }

  render() {
    const errors = this.props.errors;
    const mappedErrors = errors.map((error) => {
      return (<span key={error}>{error}</span>);
    });
    return (
      <div className="create-review-form-main-div">
        <div className="create-review-errors">
          { mappedErrors }
        </div>
        <form className="create-review-form" onSubmit={this.handleSubmit}>
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

export default CreateReviewForm;
