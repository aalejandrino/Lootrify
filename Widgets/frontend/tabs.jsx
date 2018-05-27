import React from 'react';

class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedTab : 1
    }

  }


  selectTab(newTab) {
    this.setState({selectTab : newTab});
  }

render () {
  return (
    <div className="tabs">
      <ul>
        <h1>Doggie Tabs</h1>
        <ul className="header">
          <li className='{}'>{"Dog# " + 1}</li>
          <li>{"Dog# " + 2}</li>
          <li>{"Dog# " + 3}</li>
        </ul>

        <header className="currentTab">

        </header>
        <article className="currentContent">
          <img src="./styles/images/Horgi.jpg"></img>
        </article>
      </ul>

    </div>

  );
}

}

export default Tabs;
