import React from 'react';
import Radium from 'radium';
import LoginTitle from './LoginTitle';
import LoginButton from './LoginButton';
import LoginFormField from './LoginFormField';
import LoginFormInput from './LoginFormInput';

var LoginForm = React.createClass(Radium.wrap{
  render: function() {
    return (
      <div style={[styles.loginFormStyle]}>
        <div>
          <LoginTitle/>
          <FormField>
            <FormInput class="styles.firstBox" name="Email Address" type="email" placeholder="Email Address"/>
            <FormInput class="styles.lastBox" name="Password" type="password" placeholder="Password"/>
          </FormField>
          <LoginButton/>
        </div>
      </div>
    );
  }
});

var styles = {
  loginFormStyle: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '50px'
  }
}

export default LoginForm;
