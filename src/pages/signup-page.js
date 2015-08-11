import React from 'react';

import WaiterBackground from '../components/parts/pageBackgrounds/waiter-background';
import OpaqueBox from '../components/parts/pageBackgrounds/opaque-box';
import FormTitle from '../components/parts/forms/form-title';
import SignupForm from '../components/signup/signup-form';

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
