import React from 'react';
import { Route, Switch, Link, HashRouter, Redirect } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './session_form/splash_container';
import DemoContainer from './session_form/demo_container';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <header className='top_nav'>
      <Link to="/" className='logo_title'>
          LOOTRIFY
      </Link>

      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/login' component={SplashContainer} />
      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/demo' component={DemoContainer} />
    </Switch>
  </div>
);

export default App;
