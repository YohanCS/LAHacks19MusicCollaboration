import React from 'react';
import {
        HashRouter as Router,
         Route,
       } from 'react-router-dom';

import Register from '../SignUp';
import Login from '../SignIn';
import PasswordForgetPage from '../PasswordForget';


import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
  <div>
    <Navigation />

    <hr />
    <Route path={ROUTES.SIGN_UP} component={Register} />
    <Route path={ROUTES.SIGN_IN} component={Login} />
    ///<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
  </div>
  </Router>
);

export default App;
