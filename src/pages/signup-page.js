import React from 'react';

import WaiterBackground from '../components/pageBackgrounds/waiter-background';
import OpaqueBox from '../components/pageBackgrounds/opaque-box';
import FormTitle from '../components/forms/form-title';
import SignupForm from '../components/forms/signup-form';

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
