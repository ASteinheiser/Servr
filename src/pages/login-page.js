import React from 'react';

import WaiterBackground from '../components/page-backgrounds/waiter-background';
import OpaqueBox from '../components/page-backgrounds/opaque-box';
import FormTitle from '../components/form/form-title';
import LoginForm from '../components/page-forms/login-form';

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

export default LoginPage;
