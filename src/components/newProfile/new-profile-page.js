import React from 'react';
import Radium from 'radium';

import WaiterBackground from '../parts/pageBackgrounds/waiter-background';
import OpaqueBox from '../parts/pageBackgrounds/opaque-box';
import FormTitle from '../parts/forms/form-title';
import NewProfileForm from './new-profile-form';

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

NewProfilePage = Radium(NewProfilePage);

export default NewProfilePage;
