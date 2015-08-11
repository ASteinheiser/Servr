import React from 'react';

import WaiterBackground from '../components/page-backgrounds/waiter-background';
import OpaqueBox from '../components/page-backgrounds/opaque-box';
import FormTitle from '../components/form/form-title';
import SignupForm from '../components/page-forms/signup-form';

var SignupPage = React.createClass({
  render () {
    return (
      <WaiterBackground>
        <OpaqueBox>

          <FormTitle />

          <SignupForm />

        </OpaqueBox>
      </WaiterBackground>
    );
  }
});

export default SignupPage;
