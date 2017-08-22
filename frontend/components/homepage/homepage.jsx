import React from 'react';
import SignUp from './sign_up';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="homepage-main-div">
        <SignUp
          signup={this.props.signup}
          history={this.props.history}
          errors={this.props.errors}/>
      </div>
    );
  }
}

export default Homepage;
