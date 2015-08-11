import React from 'react';
import Router from 'react-router';

import LoginRoute from './routes/login';
import SignupRoute from './routes/signup';
import NewProfileRoute from './routes/new-profile';
import NotFoundRoute from './routes/not-found';
import DashboardRoute from './routes/dashboard';
import NotificationsRoute from './routes/notifications';
import AccountRoute from './routes/account';

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler />
      </div>
    )
  }
});

var routes = (
  <Route path='/' handler={App}>
    <Route path='login' handler={LoginRoute}/>
    <Route path='signup' handler={SignupRoute}/>
    <Route path='signup/profile' handler={NewProfileRoute}/>
    <Route path='dashboard' handler={DashboardRoute}/>
    <Route path='notifications' handler={NotificationsRoute}/>
    <Route path='account' handler={AccountRoute}/>
    <Route path='*' handler={NotFoundRoute}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root/>, document.getElementById('root'));
});
