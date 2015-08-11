import React from 'react';

import WaiterBackground from '../components/parts/pageBackgrounds/waiter-background';
import OpaqueBox from '../components/parts/pageBackgrounds/opaque-box';
import FormTitle from '../components/parts/forms/form-title';
import NewProfileForm from '../components/parts/forms/new-profile-form';

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
