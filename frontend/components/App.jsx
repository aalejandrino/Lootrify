import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './session_form/splash_container';
import DemoContainer from './session_form/demo_container';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className='top_nav'>
      <Link to="/" className='logo_title'>
          LOOTRIFY
      </Link>

      <GreetingContainer />
    </header>

    <AuthRoute path='/' component={SplashContainer} />
    <AuthRoute path='/login' component={LogInFormContainer} />
    <AuthRoute path='/signup' component={SignUpFormContainer} />
    <AuthRoute path='/demo' component={DemoContainer} />
  </div>
);

export default App;
