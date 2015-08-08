import React from 'react';
import Radium from 'radium';

import FormField from '../parts/forms/form-field';
import FormInput from '../parts/forms/form-input';
import PrimaryButton from '../parts/buttons/primary-button';
import SecondaryButton from '../parts/buttons/secondary-button';

var SignupForm = React.createClass({

  getInitialState: function() {
    return {

      email: '',
      password: '',
      confirmPassword: '',
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
              name='email'
              type='email'
              placeholder='Email'
              value={this.state.email}/>
          </FormField>

          <FormField>
            <FormInput
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}/>
          </FormField>

          <FormField>
            <FormInput
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              value={this.state.password}/>
          </FormField>

          <PrimaryButton name='signupButton' type='submit' text='Sign up'/>

        </form>

        <a href='/#/login'>
          <SecondaryButton name='loginButton' type='submit' text='Login'/>
        </a>

      </div>
    );
  }
});

SignupForm = Radium(SignupForm);

export default SignupForm;
