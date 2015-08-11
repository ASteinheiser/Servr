import React from 'react';

import WaiterBackground from '../components/pageBackgrounds/waiter-background';
import OpaqueBox from '../components/pageBackgrounds/opaque-box';
import FormTitle from '../components/forms/form-title';
import NewProfileForm from '../components/forms/new-profile-form';

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
