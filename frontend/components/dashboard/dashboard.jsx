import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.user;

  }

  render() {
    return(
    <div className='center_container'>
      <div className="centerBars">
        <div className="leftSideBar"></div>
        <div className="centerColumn"></div>
        <div className="rightSideBar"></div>
      </div>

    </div>
    )
  }
}

export default Dashboard
