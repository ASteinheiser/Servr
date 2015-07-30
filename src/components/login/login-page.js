import React from 'react';
import Radium from 'radium';

import LoginForm from './login-form';

var LoginPage = React.createClass({
  render: function() {
    return (
      <div style={[styles.loginBackground]}>
        <div style={[styles.loginBoxOpaque]}>

          <h1 style={[styles.servrTitle]}>
            <font>Serv</font>
            <font style={[styles.servrTitleR]}>r</font>
          </h1>

          <LoginForm />

        </div>
      </div>
    );
  }
});

LoginPage = Radium(LoginPage);

var styles = {
  loginBackground: {
    backgroundImage: 'url(src/images/waiter.jpg)',
    backgroundSize: 'cover',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginBoxOpaque: {
    padding: '30px',
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    WebkitBorderRadius: '5px',
    margin: '168px auto auto auto',
  },
  servrTitle: {
    fontSize: '60px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',
    textAlign: 'center',
    margin: '-15px 0px 15px 0px',
    cursor: 'default',
    WebkitFontSmoothing: 'antialiased',
  },
  servrTitleR: {
    color: 'rgb(72, 124, 236)',
  },
}

export default LoginPage;
