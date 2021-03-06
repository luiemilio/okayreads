import React from 'react';
import { Link } from 'react-router-dom';

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

  componentWillMount(){
    this.props.requestAllBooks();
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then(() => {
      this.props.history.push(`/books/${this.props.bookId}`);
    }).then( () => {
      this.props.removeErrors();
    });
  }



  render() {
    if (this.props.book) {
      let errorMsg;
      if (this.props.errors) {
        errorMsg = "Please fill out all fields";
      }
      const bookPath = `/books/${this.props.book.id}`;
      return (
        <div className="review-main-div">
          <Link to={bookPath}>
            <h1 className="review-form-title">{this.props.book.title}</h1>
          </Link>
          <form onSubmit={this.handleSubmit}>
            <label className="review-rating-label"> My rating:
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
              placeholder="What did you think?"
              rows="8" cols="80"/>
            <input type="submit"></input>
          </form>
          <div>
            <span>{errorMsg}</span>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CreateReviewForm;
