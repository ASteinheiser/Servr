import React from 'react';
import Radium from 'radium';

import SignupForm from './signup-form';

var SignupPage = React.createClass({
  render: function() {
    return (
      <div style={[styles.signupBackground]}>
        <div style={[styles.signupBoxOpaque]}>

          <h1 style={[styles.servrTitle]}>
            <font>Serv</font>
            <font style={[styles.servrTitleR]}>r</font>
          </h1>

          <SignupForm />

        </div>
      </div>
    );
  }
});

SignupPage = Radium(SignupPage);

var styles = {
  signupBackground: {
    backgroundImage: 'url(src/images/waiter.jpg)',
    backgroundSize: 'cover',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  signupBoxOpaque: {
    padding: '30px',
    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    WebkitBorderRadius: '5px',
    margin: '148px auto auto auto',
  },
  servrTitle: {
    fontSize: '70px',
    fontWeight: 'lighter',
    color: 'rgb(215, 215, 215)',
    textAlign: 'center',
    margin: '-20px 0px 20px 0px',
    cursor: 'default',
    WebkitFontSmoothing: 'antialiased',
  },
  servrTitleR: {
    color: 'rgb(72, 124, 236)',
  },
}

export default SignupPage;
