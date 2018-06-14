
import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginSessionForm extends React.Component {

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
    this.props.processForm(user).then( () => this.props.closeModal() );

  };

  renderErrors() {
    return(
      <ul id="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="modalSessionForm">
        <form className="signin-form-box" onSubmit={this.handleSubmit}>
          <div id='signin-inputs'>
            <div className='signin-inputs'>
              <div>
                <input
                  onChange={this.update('user_name')}
                  type="text"
                  value={`${this.state.user_name}`}
                  placeholder="User Name"
                  />
              </div>
              <br></br>

              <div>
                <input
                  onChange={this.update('password')}
                  type="password"
                  value={`${this.state.password}`}
                  placeholder="Password"
                  />
              </div>
              <br></br>

            </div>

            <h3>
              Welcome to Lootrify, <br></br>
              Please Login !
            </h3>
            <br></br>

            <input className='modalSubmitBtn btn-teal' type='submit' value={this.props.formType}/>
          </div>

          {this.renderErrors()}
        </form>


      </div>
    );
  }
}

export default withRouter(LoginSessionForm);
