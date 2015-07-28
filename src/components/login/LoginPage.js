import React from 'react';
import LoginModule from './LoginModule';
import '../../styles/login-styles.css';

var LoginPage = React.createClass({
  render: function() {
    return (
      <div className="loginBackground">
        <LoginModule />
      </div>
    );
  }
});

React.render(<LoginPage/>, document.getElementById('loginPage'));
