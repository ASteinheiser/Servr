import React from 'react';

import WaiterBackground from '../components/page-backgrounds/waiter-background';
import OpaqueBox from '../components/page-backgrounds/opaque-box';
import FormTitle from '../components/forms/form-title';
import LoginForm from '../components/forms/login-form';

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
