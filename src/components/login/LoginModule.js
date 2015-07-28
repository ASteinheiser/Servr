import React from 'react';
import LoginForm from './LoginForm';
import '../../styles/login-styles.css';

var LoginModule = React.createClass({
  render: function() {
    return (
      <div className="loginModuleStyle">
        <LoginForm />
      </div>
    );
  }
});

export default LoginModule;
