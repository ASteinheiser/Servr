import React from 'react';
import Radium from 'radium';

import FormField from '../forms/form-field';
import FormInput from '../forms/form-input';

var LoginForm = React.createClass({

  getInitialState: function() {
    return {
      email: '',
      password: ''
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log('Bang!', this.state);
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
              placeholder='Email Address'
              value={this.state.email}/>
          </FormField>
        </form>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <FormField>
            <FormInput
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}/>
          </FormField>
          <button style={[styles.submitButton]} type="submit">Login!</button>
        </form>
      </div>
    );
  }
});

LoginForm = Radium(LoginForm);

var styles= {
  submitButton: {
    width: '100%',
    fontSize: '20px',
    padding: '7px',
    border: 'none',
    borderRadius: '2px',
    backgroundColor: 'rgba(43, 43, 43, 0)',
    outline: 'none',

    ':hover': {
      backgroundColor: 'rgba(113, 113, 113, 1)',
    },
  }
}

export default LoginForm;
