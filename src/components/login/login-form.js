import React from 'react';
import Radium from 'radium';
import page from 'page';

import FormField from '../forms/form-field';
import FormInput from '../forms/form-input';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

var navigate = function (url) {
  return function () {
    page(url);
  }
};

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

  render: function() {
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

        <SecondaryButton onClick={navigate('/signup')} name='signupButton' type='submit' text='Sign up'/>
      </div>
    );
  }
});

LoginForm = Radium(LoginForm);

export default LoginForm;
