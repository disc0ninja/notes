import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Session} from 'meteor/session';
import {Router, Route, browserHistory} from 'react-router';

// Component Imports
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const onEnterNotePage = (nextState) => {
  Session.set('selectedNoteId', nextState.params.id);
};

const onLeaveNotePage = () => {
  Session.set('selectedNoteId', undefined);
};

export const onAuthChange = (isAuthenticated, currentPagePrivacy) => {
  const isUnauthenticatedPage = currentPagePrivacy === 'unauth';
  const isAuthenticatedPage = currentPagePrivacy === 'auth';

  // If on an unauthenticated page and logged in, redirect to /links
  if (isAuthenticated && isUnauthenticatedPage) {
    browserHistory.replace('/dashboard');
    // If on an authenticated page and not logged in, redirect to /
  } else if (!isAuthenticated && isAuthenticatedPage) {
    browserHistory.replace('/');
  }
}

export const globalOnChange = (prevState, nextState) => {
  globalOnEnter(nextState);
};

export const globalOnEnter = (nextState) => {
  const lastRoute = nextState.routes[nextState.routes.length - 1]
  Session.set('currentPagePrivacy', lastRoute.privacy)
};

export const routes = (
  <Router history={browserHistory}>
    <Route onChange={globalOnChange} onEnter={globalOnEnter}>
      <Route path="/" component={Login} privacy="unauth"/>
      <Route path="/signup" component={Signup} privacy="unauth"/>
      <Route path="/dashboard" privacy="auth" component={Dashboard}/>
      <Route path="/dashboard/:id" privacy="auth" component={Dashboard} onEnter={onEnterNotePage} onLeave={onLeaveNotePage}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);
