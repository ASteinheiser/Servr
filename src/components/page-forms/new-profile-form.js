import React from 'react';

import FormField from '../form/form-field';
import FormInput from '../form/form-input';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

var NewProfileForm = React.createClass({
  getInitialState: function() {
    return {

      fullName: '',
    }
  },

  handleSubmit: function(e) {

    console.log('Submitting ',this.state);
    e.preventDefault();
  },

  handleChange: function (e) {

    var change = {};
    change[e.target.name] = e.target.value;

    this.setState(change);
  },

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>

          <FormField>
            <FormInput
              name='fullName'
              type='text'
              placeholder='Full Name'
              value={this.state.fullName}/>
          </FormField>

          <PrimaryButton name='createProfile' type='submit' text='Create Profile'/>

        </form>

        <a href='/#/signup'>
          <SecondaryButton name='cancel' type='submit' text='Cancel'/>
        </a>

      </div>
    );
  }
});

export default NewProfileForm;
