import React from 'react';
import ReactDOM from 'react-dom';
import Congrats from './congrats';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});

// <Congrats />
class Root extends React.Component {

  render() {
    return (
      <div>
        <Clock />
        <br></br>
        <Tabs />
      </div>
    );
  }
}
