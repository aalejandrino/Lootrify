
import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {search: '', friendId: null};
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);

    this.isOpen = props.isOpen;
    this.closeModal = props.closeModal;
    this.searchUsers = props.searchUsers;
    this.createFriendship = props.createFriendship;
  };

  handleClick() {
    if (this.isOpen) {
      this.closeModal()
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let friendship = {user_id: this.props.currentUserId, friend_id: this.state.friendId};
    let friendship2 = {user_id: this.state.friendId, friend_id: this.props.currentUserId};

    this.createFriendship(friendship)
      .then( () => this.createFriendship(friendship2) )
      .then( () => this.props.fetchFriendships() )
      .then( () => this.setState({search: '', friendId: null}) )
      .then( () => this.closeModal());

      // window.location.reload();
  }

  handleInput(e) {
    this.setState({search: e.currentTarget.value}, () => {

    });
    this.searchUsers(this.state.search);
  };

  selectName(friendId) {

    return (e) => {
      let name = e.currentTarget.firstChild.data;
      this.setState({search: name, friendId});

    };
  }

  render() {
    let results = this.props.users.map((user,i) => {
      if (this.state.search === user.user_name.slice(0, this.state.search.length)) {
        return(
          <li
            key={i}
            onClick={this.selectName(user.id)}>
            {user.user_name} - ({user.email})
          </li>
        )
      }
    })

    return (
      <div className="friend-search-form">
        <div id="friend-form-title">
          <h3>
            <span>
            </span>
            <div>
              Invite friends
            </div>
          </h3>

          <div id="exit-friend-form" onClick={this.handleClick.bind(this)}>
            X
          </div>
        </div>
        <br></br>

        <form id="friend-form-inputs">
          <input
            type="text"
            placeholder="Find names here and add them as Friends!"
            onChange = {this.handleInput}
            value = {this.state.search}
            />

          <div className="friends-list">
            <ul>
              {results}
            </ul>
          </div>
          <br></br>

          <textarea placeholder="Include an optional message"></textarea>
          <br></br>

          <button className="friend-form-btn btn" onClick={this.handleSubmit.bind(this)}>Add Friend</button>
        </form>


      </div>
    )
  };
}

export default withRouter(SearchForm);
