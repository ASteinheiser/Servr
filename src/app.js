import React from 'react';
import Radium from 'radium';
import Router from 'react-router';

import LoginPage from './components/login/login-page';
import SignupPage from './components/signup/signup-page';
import NewProfile from './components/newProfile/new-profile-page';
import NotFoundPage from './components/notFound/not-found-page';
import DashboardPage from './components/dashboard/dashboard-page';

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
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
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
  render () {
    return <LoginPage />;
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

var NewProfileRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
  render () {
    return <NewProfile />;
  }
});

var NotFoundRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
  render () {
    return <NotFoundPage />;
  }
});

var DashboardRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
  render () {
    return <DashboardPage />;
  }
});

var routes = (
  <Route path='/' handler={App}>
    <Route path='login' handler={LoginRoute}/>
    <Route path='signup' handler={SignupRoute}/>
    <Route path='signup/profile' handler={NewProfileRoute}/>
    <Route path='dashboard' handler={DashboardRoute}/>
    <Route path='*' handler={NotFoundRoute}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root/>, document.getElementById('root'));
});
