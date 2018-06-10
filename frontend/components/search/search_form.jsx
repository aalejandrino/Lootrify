
import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {search: ''};
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);

    this.isOpen = props.isOpen;
    this.closeModal = props.closeModal;
    this.searchUsers = props.searchUsers;
  };

  handleClick() {
    if (this.isOpen) {
      this.closeModal()
    }
  }

  handleInput(e) {
    this.setState({search: e.currentTarget.value}, () => {

    });
    this.searchUsers(this.state.search);
  };

  selectName(e) {
    let name = e.currentTarget.firstChild.data;
    debugger
    this.setState({search: name});
  }

  render() {
    let results = this.props.users.map((user,i) => {
      return(
        <li
          key={i}
          onClick={this.selectName}>
          {user.user_name} - ({user.email})
        </li>
      )
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

          <button className="friend-form-btn btn">Send Invites and Add Friends</button>
        </form>


      </div>
    )
  };
}
export default withRouter(SearchForm);
