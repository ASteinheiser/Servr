import React from 'react';
import Radium from 'radium';

var LoginFormField = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

LoginFormField = Radium(LoginFormField);

export default LoginFormField;
