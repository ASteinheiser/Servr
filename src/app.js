import React from 'react';
import Radium from 'radium';
import Router from 'react-router';

import LoginPage from './components/login/login-page';
import SignupPage from './components/signup/signup-page';
import HomePage from './components/home/home-page';
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

var LoginRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    var fetchMessage = function (err, message) {
      this.setState({ message: message });
    }
  },

  render () {
    return <LoginPage />;
  }
});

var SignupRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    var fetchMessage = function (err, message) {
      this.setState({ message: message });
    }
  },

  render () {
    return <SignupPage />;
  }
});

var HomeRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    var fetchMessage = function (err, message) {
      this.setState({ message: message });
    }
  },

  render () {
    return <HomePage />;
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
    <Route path='home' handler={HomeRoute}/>
    <Route path='*' handler={NotFoundRoutes}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root/>, document.getElementById('root'));
});

// React.render(<LoginPage />, document.getElementById('app'));
