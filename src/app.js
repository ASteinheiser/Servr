import React from 'react';
import Radium from 'radium';
import Router from 'react-router';

import LoginPage from './components/login/login-page';
import SignupPage from './components/signup/signup-page';
import NotFoundPage from './components/notfound/not-found-page';

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

var SignupRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },

  render () {
    return <SignupPage />;
  }
});

var LoginRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },

  render () {
    return <LoginPage />;
  }
});

var NotFoundRoutes = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
  },

  render () {
    return <NotFoundPage />;
  }
});

var routes = (
  <Route path='/' handler={App}>
    <Route path='login' handler={LoginRoute}/>
    <Route path='signup' handler={SignupRoute}/>
    <Route handler={NotFoundRoutes}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root/>, document.getElementById('root'));
});

// React.render(<LoginPage />, document.getElementById('app'));
