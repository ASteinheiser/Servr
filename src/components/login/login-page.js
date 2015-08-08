import React from 'react';
import Radium from 'radium';

import FormTitle from '../parts/servrTitles/form-title';
import LoginForm from './login-form';

var LoginPage = React.createClass({
  render () {
    return (

      <div style={[styles.loginBackground]}>
        <div style={[styles.loginBoxOpaque]}>

          <FormTitle />

          <LoginForm />

        </div>
      </div>
    );
  }
});

LoginPage = Radium(LoginPage);

var styles = {

  loginBackground: {

    display: 'flex',
    backgroundImage: 'url(src/images/waiter.jpg)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loginBoxOpaque: {

    backgroundColor: 'rgba(10, 10, 10, 0.9)',

    padding: '30px',
    WebkitBorderRadius: '5px',
    margin: '168px auto auto auto',
  }
}

export default LoginPage;
