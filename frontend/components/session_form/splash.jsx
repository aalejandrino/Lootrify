import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  constructor(props) {
    super(props);

    // this.state = props.user;
    this.state = props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(input) {
    return (event) => this.setState({[input]: event.target.value});
  }

  handleSubmit(e) {

    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="splashPage">

        <h2>
          <div id='splash-small-icon'></div>
          <div id='caption1'> Split expenses with friends. </div>
        </h2>

        <div id='tag-line'>
          <strong>Share bills and IOUs. Make sure everyone gets paid back.
          Totally free for Windows, Mac, and Ubuntu. </strong>
        </div>

        <div className='splash-pics'>
          <div id='splash-cover'></div>
          <div id='splash-mascot'></div>
        </div>

        <div>
          {/*<Link to="/demo" className="demoBtn">Demo Login !</Link>*/}
          <form onSubmit={ () => this.props.processForm(this.handleSubmit)}>
            <input className='demoBtn' type='submit' value='Demo Login !'/>
          </form>
        </div>

        <div id='companies'></div>

        <div className='footer'>
          <div id='footer-caption'>
            Made with  <i className="fa fa-heart" aria-hidden="true"></i>  in San Francisco, CA - USA
          </div>

          <div id='footer-aA'>
            {'Check out a/A! - https://www.appacademy.io/'}
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Splash);
