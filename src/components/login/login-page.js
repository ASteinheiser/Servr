import React from 'react';
import Radium from 'radium';

import WaiterBackground from '../parts/pageBackgrounds/waiter-background';
import OpaqueBox from '../parts/pageBackgrounds/opaque-box';
import FormTitle from '../parts/forms/form-title';
import LoginForm from './login-form';

var LoginPage = React.createClass({
  render () {
    return (

      <WaiterBackground>
        <OpaqueBox>

          <FormTitle />

          <LoginForm />

        </OpaqueBox>
      </WaiterBackground>
    );
  }
});

LoginPage = Radium(LoginPage);

export default LoginPage;
