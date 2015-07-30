import React from 'react';
import page from 'page';

import LoginPage from './components/login/login-page';
import SignupPage from './components/signup/signup-page';

var PageNotFound = React.createClass({
  render: function() {
    return (
      <h1>404: Page not found</h1>
    );
  }
});

var Router = React.createClass({

  getInitialState: function () {
    return {
      component: <div />
    }
  },

  componentDidMount: function () {
    var self = this;

    page('/login', function (ctx) {
      self.setState({ component: <LoginPage /> });
    });

    page('/signup', function (ctx) {
      self.setState({ component: <SignupPage /> });
    });

    page('*', function (ctx) {
      self.setState({ component: <PageNotFound /> });
    });

    page.start();
  },

  render: function () {
    return this.state.component;
  }
});

React.renderComponent(<Router />, document.querySelector('body'));
