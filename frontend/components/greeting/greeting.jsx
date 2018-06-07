import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = (props) => {
  let currentUser = props.currentUser;
  let logout = props.logout;

  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login" className="login btn">Login</Link>
      <div>or</div>
      <Link to="/signup" className="signup btn">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <div id='profile-pic'></div>
      <h2 className="header-name">{currentUser.user_name}</h2>
      <button className="header-button" onClick={ () => logout()}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
