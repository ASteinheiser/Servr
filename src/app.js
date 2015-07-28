import React from 'react';
import Radium from 'radium';
import LoginModule from './components/login/LoginModule';

var LoginPage = React.createClass(Radium.wrap({
  render: function() {
    return (
      <div style={[styles.loginBackground]}>
        <LoginModule />
      </div>
    );
  }
}));

var styles = {
  loginBackground: {
    backgroundImage: 'url(waiter.jpg)',
    backgroundSize: 'cover',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    display: 'flex'
  }
}

React.render(<LoginPage/>, document.getElementById('loginPage'));
