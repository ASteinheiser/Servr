import React from 'react';
import Radium from 'radium';

import FormTitle from '../parts/servrTitles/form-title';
import NewProfileForm from './new-profile-form';

var NewProfilePage = React.createClass({
  render () {
    return (

      <div style={[styles.signupBackground]}>
        <div style={[styles.signupBoxOpaque]}>

          <FormTitle />

          <NewProfileForm />

        </div>
      </div>
    );
  }
});

NewProfilePage = Radium(NewProfilePage);

var styles = {

  signupBackground: {

    backgroundImage: 'url(src/images/waiter.jpg)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

    display: 'flex',
  },
  signupBoxOpaque: {

    backgroundColor: 'rgba(10, 10, 10, 0.9)',

    margin: '188px auto auto auto',
    padding: '30px',
    borderRadius: '5px',
  }
}

export default NewProfilePage;
