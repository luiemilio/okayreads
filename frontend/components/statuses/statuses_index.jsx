import React from 'react';
import { Link } from 'react-router-dom';


class StatusesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="statuses-index-main-div">
        <ul className="statuses-index-ul">
          <Link to="/statuses/read">Read</Link>
          <Link to="/statuses/unread">Unread</Link>
          <Link to="/statuses/reading">Reading</Link>
        </ul>
      </div>
    );
  }

}

export default StatusesIndex;
