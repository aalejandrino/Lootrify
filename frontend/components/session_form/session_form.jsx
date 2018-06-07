
import React from 'react';
import { withRouter } from 'react-router-dom';

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
  }

  update(input) {
    return (event) => this.setState({[input]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sessionForm">
        <h2>Welcome to Lootrify!</h2>
        <h2>Please {this.props.formType}</h2>

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>

          <label> Hi there! my name is
            <input onChange={this.update('user_name')} type="text" value={this.state.user_name}/>
          </label>
          <br></br>

          <label> Here's my email address:
            <input onChange={this.update('email')} type="text" value={this.state.email}/>
          </label>
          <br></br>

          <label> And here's my password:
            <input onChange={this.update('password')} type="text" value={this.state.password}/>
          </label>

          <input type='submit' value={this.props.formType}/>
        </form>

      </div>
    );
  }
}

export default withRouter(SessionForm);
