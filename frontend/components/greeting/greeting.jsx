import React from 'react';
import { Link, Redirect } from 'react-router-dom';



const Greeting = (props) => {
  let currentUser = props.currentUser;
  let logout = props.logout;
  let openModal = props.openModal;
  let closeModal = props.closeModal;
  let isOpen = props.isOpen;

  const handleClick = () => {
    if (isOpen) {
      closeModal()
    } else {
      openModal('login')
    }
  }

  const handleLogout = () => {
    logout(),
    <Redirect to="/" />

  }

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/" className="login btn" onClick={handleClick.bind(this)}>Login</Link>
      <div>or</div>


      <Link to="/signup" className="signup btn" onClick={() => props.closeModal()}>Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div id='profile-pic'></div>
      <h2 className="header-name">{currentUser.user_name}</h2>
      <button className="header-logout btn" onClick={handleLogout.bind(this)}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
