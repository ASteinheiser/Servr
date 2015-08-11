import React from 'react';

import WaiterBackground from '../components/parts/pageBackgrounds/waiter-background';
import OpaqueBox from '../components/parts/pageBackgrounds/opaque-box';
import FormTitle from '../components/parts/forms/form-title';
import LoginForm from '../components/login/login-form';

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
