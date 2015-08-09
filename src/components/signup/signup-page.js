import React from 'react';
import Radium from 'radium';

import WaiterBackground from '../parts/pageBackgrounds/waiter-background';
import OpaqueBox from '../parts/pageBackgrounds/opaque-box';
import FormTitle from '../parts/forms/form-title';
import SignupForm from './signup-form';

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

SignupPage = Radium(SignupPage);

export default SignupPage;
