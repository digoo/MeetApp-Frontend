import React from 'react';
import { Switch, Link } from 'react-router-dom';

import Route from './route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';
import Meetapp from '~/pages/Meetapp';
import Profile from '~/pages/Profile';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/change" component={Meetapp} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route
        path="/"
        component={() => (
          <>
            <h1>404 not found</h1>
            <Link to="/">Voltar</Link>
          </>
        )}
      />
    </Switch>
  );
}
