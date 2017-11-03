import React from 'react';
import { Link } from 'react-router-dom';
import { getBooksfromStatus } from '../../reducers/selectors';


class StatusesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="statuses-index-main-div">
        <h1>bookshelves</h1>
        <div>
          <ul className="statuses-index-ul">
            <Link to="/statuses/read">read ({this.props.readBookIds.length})</Link>
            <Link to="/statuses/reading">currently-reading ({this.props.readingBookIds.length})</Link>
            <Link to="/statuses/unread">to-read ({this.props.unreadBookIds.length})</Link>
          </ul>
        </div>
      </div>
    );
  }

}

export default StatusesIndex;
