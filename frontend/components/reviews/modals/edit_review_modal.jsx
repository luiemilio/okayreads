import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Redirect } from 'react-router';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class EditReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.review.id,
      book_id: this.props.review.book_id,
      user_id: this.props.review.user_id,
      score: this.props.review.score,
      title: this.props.review.title,
      body: this.props.review.body,
      modalIsOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    this.props.requestAllReviews();
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editReview(this.state).then(() => {
      this.props.removeErrors();
      this.closeModal();
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
        <div>
          <button className="edit-review-btn"
                  onClick={this.openModal}>
            Edit</button>
          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Edit Review Modal"
              style={customStyles}
            >
            <div className="review-main-div">
              <Link to={bookPath}>
                <h1 className="review-form-title">{this.props.book.title}</h1>
              </Link>
              <form onSubmit={this.handleSubmit}>
                <label className="review-rating-label"> My rating:
                  <select onChange={this.update('score')} name="score" defaultValue={this.props.review.score}>
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

          </Modal>
        </div>
        );
      } else {
        return null;
      }
  }
}


export default EditReviewModal;
