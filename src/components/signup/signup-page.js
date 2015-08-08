import React from 'react';
import Radium from 'radium';

import FormTitle from '../parts/servrTitles/form-title';
import SignupForm from './signup-form';

var SignupPage = React.createClass({
  render () {
    return (

      <div style={[styles.signupBackground]}>
        <div style={[styles.signupBoxOpaque]}>

          <FormTitle />

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
  }
}

export default SignupPage;
