import React from 'react';
import Radium from 'radium';

import SignupForm from './signup-form';

var SignupPage = React.createClass({
  render () {
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

    display: 'flex',
    backgroundImage: 'url(src/images/waiter.jpg)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  signupBoxOpaque: {

    backgroundColor: 'rgba(10, 10, 10, 0.9)',

    padding: '30px',
    margin: '148px auto auto auto',

    WebkitBorderRadius: '5px',
  },
  servrTitle: {

    fontSize: '60px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',

    textAlign: 'center',
    margin: '-15px 0px 15px 0px',
    WebkitFontSmoothing: 'antialiased',

    cursor: 'default',
  },
  servrTitleR: {

    color: 'rgb(72, 124, 236)',
  },
}

export default SignupPage;
