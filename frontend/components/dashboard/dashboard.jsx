import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DashboardFriendItem from './dashboard_friend_item.jsx';
import DashboardPrivate from './dashboard_private_container';

class Dashboard extends React.Component {

  componentDidMount() {

    this.props.fetchFriendships().then(() => this.props.fetchBills()).then(() => {
      this.setState({ selectedFriend: '#private_dashboard#'});
    })
  }

  constructor(props) {
    super(props);

    window.scrollTo(0, 0);

    this.state = { selectedFriend: ''};
    let openModal = props.openModal;
    let closeModal = props.closeModal;
    let isOpen = props.isOpen;

    this.updateFriend = this.updateFriend;
  }

  updateFriend (user) {
    this.setState({selectedFriend: user});
  };

  handleClick() {
    if (this.props.isOpen) {
      this.props.closeModal();
    } else {
      this.props.openModal('addFriend', '');
    }
  }

  selectFriend(user) {
    return (e) => {
      this.setState({selectedFriend: user});

      this.props.closeModal();
    };
  }

  selectDashboard() {
    return (e) => {
      this.setState({selectedFriend: '#private_dashboard#'});

      this.props.closeModal();
    }
  }

  removeFriend(friendId, currentUserId) {
    return (e) => {
      if (this.props.isOpen) {
        this.props.closeModal();
      }

      this.props.friends.forEach(friendship => {
        if (friendship.user_id === currentUserId && friendship.friend_id === friendId ||
            friendship.user_id === friendId && friendship.friend_id === currentUserId) {

              this.props.removeFriendship(friendship.id, currentUserId, friendship.friend_id)
                .then( () => this.props.fetchFriendships())
            }
      })

    }
  }


  render() {

    return(
    <div className='center_container'>
      <div className="centerBars">

        <div className="leftSideBar">
          <ul>
            <div id="leftSide-1">
              <li id = "dashboard" onClick={this.selectDashboard().bind(this)}>
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

              <div id="current-friends">
                <ul>
                    {this.props.users.map(user => {
                       if (user.id !== this.props.currentUserId) {
                           // this.props.searchUser(friend.friend_id); // gives action type errors?
                           return (
                               <li key={user.id} >
                                 <div onClick={this.selectFriend(user).bind(this)}>
                                 <i className="fas fa-user"></i>
                                   {user.user_name}
                                 </div>

                                 <a
                                   className="remove-friend"
                                   onClick={this.removeFriend(user.id, this.props.currentUserId).bind(this)}
                                   >
                                   x
                                 </a>
                               </li>
                           );
                        }})
                    }
                  </ul>
              </div>
            </div>
          </ul>
        </div>

        <div className="centerColumn">
          <DashboardFriendItem
            user={this.state.selectedFriend}
            bills={this.props.bills}
            billmemberships={this.props.billmemberships}
            fetchBill={this.props.fetchBill}
            createBill={this.props.createBill}
            removeBill={this.props.removeBill}
            currentUserId={this.props.currentUserId}
            closeModal={this.props.closeModal}
            openModal={this.props.openModal}
            isOpen={this.props.isOpen}
            />

          <DashboardPrivate selected={this.state.selectedFriend} update={this.updateFriend.bind(this)}/>

        </div>


        <div className="rightSideBar"></div>
      </div>

    </div>
    )
  }
}

export default Dashboard
