
import React from 'react';
import { withRouter } from 'react-router-dom';

class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.user;


    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="Demo">
        <h3>Demo Page Here</h3>



            
      </div>
    );
  }
}

export default withRouter(Demo);
