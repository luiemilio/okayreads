import React from 'react';
import { Link } from 'react-router-dom';


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
            <Link to="/statuses/read">read</Link>
            <Link to="/statuses/reading">currently-reading</Link>
            <Link to="/statuses/unread">to-read</Link>
          </ul>
        </div>
      </div>
    );
  }

}

export default StatusesIndex;
