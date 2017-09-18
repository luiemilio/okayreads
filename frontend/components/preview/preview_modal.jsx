import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Redirect } from 'react-router';
import PDF from 'react-pdf-js';

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

class PreviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  onPageComplete(page) {
    this.setState({ page });
  }

  handlePrevious(e) {
    e.preventDefault();
    this.setState({ page: this.state.page - 1 });
  }

  handleNext(e) {
    e.preventDefault();
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination(page, pages) {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render() {
    if (this.props.book) {
      let pagination = null;
      if (this.state.pages) {
        pagination = this.renderPagination(this.state.page, this.state.pages);
      }
      return (
        <div>
          <button className="open-preview-btn"
                  onClick={this.openModal}>
                  Preview this book
          </button>
          <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Preview Modal"
              style={customStyles}
            >
            <div className="preview-main-div">
              <PDF file="http://res.cloudinary.com/dkefwablr/raw/upload/v1505761957/h2g2.pdf"
                   onDocumentComplete={this.onDocumentComplete}
                   onPageComplete={this.onPageComplete}
                   page={this.state.page} />
              {pagination}
            </div>

          </Modal>
        </div>
        );
      } else {
        return null;
      }

  }
}

export default PreviewModal;
