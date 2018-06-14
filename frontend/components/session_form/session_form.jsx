
import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    // this.state = props.user;
    this.state = {
      user_name: '',
      password: '',
      email: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  clearState() {
    this.setState (
      {
        user_name: '',
        password: '',
        email: '',
      }
    );

  };

  update(input) {
    return (event) => this.setState({[input]: event.target.value});
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.clearState();
    this.props.processForm(user);
  };

  renderErrors() {

    if (this.props.errors.length !== 0) {

      return(
        <div id="signup-errors">
          <span> The following errors occured: </span>

          <ul >
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    };

  };

  redirect() {
    // <Redirect to="/" />
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="sessionForm">
        <h3>{this.props.formType} - Introduce Yourself</h3>


        <form className="form-box" onSubmit={this.handleSubmit}>

          <div onClick={ () => this.redirect() } id='signup-image'></div>

          <div id='signup-inputs'>
            <h3>
              Introduce Yourself
            </h3>
            <br></br>

            {this.renderErrors()}

            <div> Hi there! my name is
              <br></br>
              <input onChange={this.update('user_name')} type="text" value={this.state.user_name}/>
            </div>
            <br></br>

            <div> Here's my email address:
              <br></br>
              <input onChange={this.update('email')} type="text" value={this.state.email}/>
            </div>
            <br></br>

            <div> And here's my password:
              <br></br>
              <input onChange={this.update('password')} type="password" value={this.state.password}/>
            </div>
            <br></br>

            <input className='submitBtn btn-orange' type='submit' value={this.props.formType}/>
          </div>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
