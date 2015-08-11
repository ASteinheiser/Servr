import React from 'react';

import FormField from '../form/form-field';
import FormInput from '../form/form-input';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

var LoginForm = React.createClass({
  getInitialState: function() {
    return {

      email: '',
      password: ''
    }
  },

  handleSubmit: function(e) {

    e.preventDefault();
    console.log('Submitting ',this.state);
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

          <PrimaryButton name='loginButton' type='submit' text='Login'/>

        </form>

        <a href='/#/signup'>
          <SecondaryButton name='signupButton' type='submit' text='Sign up'/>
        </a>

      </div>
    );
  }
});

export default LoginForm;
