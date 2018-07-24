import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { Router } from 'react-router';



const Greeting = (props) => {
  let currentUser = props.currentUser;
  let logout = props.logout;
  let openModal = props.openModal;
  let closeModal = props.closeModal;
  let isOpen = props.isOpen;

  const handleClick = () => {
    props.clearErrors();
    // console.log(props.history)

    if (isOpen) {
      closeModal()
    } else {
      openModal('login', '')
    }
  }

  const handleLogout = () => {
    if (isOpen) {
      closeModal();
    }

    logout(),
    <Redirect to="/" />

  }

  const handleSignup = () => {
    if (isOpen) {
      closeModal();
    };

    <Redirect from="/" to="/signup" />
  }

  const sessionLinks = () => (
    <nav className="login-signup">
      {/* <input className='login btn' type='submit' onClick={handleClick.bind(this)} value='Login' /> */}
      <Link to="/" className="login btn" onClick={handleClick.bind(this)}>Login</Link>
      <div> or </div>

      {/* <input className='signup btn' type='submit' onClick={handleSignup.bind(this)} value='Sign Up!' /> */}
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
