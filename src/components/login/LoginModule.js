import React from 'react';
import Radium from 'radium';
import LoginForm from './LoginForm';

var LoginModule = React.createClass(Radium.wrap{
  render: function() {
    return (
      <div style={[styles.loginModuleStyle]}>
        <LoginForm />
      </div>
    );
  }
});

var styles = {
  loginModuleStyle: {
    display: 'flex',
    background: 'rgba(0,0,0,0.75)',
    border: '1px solid #000000',
    borderRadius: '10px',
    margin: 'auto',
    paddingLeft: '45px',
    paddingRight: '45px',
    marginTop: '180px'
  }
}

export default LoginModule;
