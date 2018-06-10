import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    window.scrollTo(0, 0)

    this.state = props.user;
    let openModal = props.openModal;
    let closeModal = props.closeModal;
    let isOpen = props.isOpen;
  };

  handleClick() {
    if (this.props.isOpen) {
      this.props.closeModal()
    } else {
      this.props.openModal('addFriend')
    }
  };

  render() {
    return(
    <div className='center_container'>
      <div className="centerBars">
        <div className="leftSideBar">
          <ul>
            <div id="leftSide-1">
              <li>
                <span></span>
                Dashboard
              </li>
              <li>
                <i className="fa fa-flag" aria-hidden="true"></i>
                Recent activity
              </li>
            </div>
            <div id="leftSide-2">
              <li>
                <i className="fa fa-list" aria-hidden="true"></i>
                All expenses
              </li>
            </div>
            <div id="leftSide-3">
              <li className="groups">
                <div>GROUPS</div>
                <div>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                   add
                </div>
              </li>

              <div id="no-groups">
                You do not have any groups
                <br></br>
                yet. <i className="fa fa-question-circle" aria-hidden="true"></i>
              </div>

              <li className="friends">
                <div>FRIENDS</div>
                <div id="add-friends" onClick={this.handleClick.bind(this)}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                   add
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="centerColumn"></div>
        <div className="rightSideBar"></div>
      </div>

    </div>
    )
  }
}

export default Dashboard
