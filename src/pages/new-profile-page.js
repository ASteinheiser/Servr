import React from 'react';

import WaiterBackground from '../components/backgrounds/waiter-background';
import OpaqueBox from '../components/backgrounds/opaque-box';
import FormTitle from '../components/form/form-title';
import NewProfileForm from '../components/page-forms/new-profile-form';

var NewProfilePage = React.createClass({
  render () {
    return (
      <WaiterBackground>
        <OpaqueBox>

          <FormTitle />
          <NewProfileForm />

        </OpaqueBox>
      </WaiterBackground>
    );
  }
});

export default NewProfilePage;
