import React from 'react';
import Radium from 'radium';

var LoginFormField = React.createClass({
  render: function() {
    return (
      <div style={[styles.formField]}>{this.props.children}</div>
    );
  }
});

LoginFormField = Radium(LoginFormField);

var styles = {
  formField: {
    flexDirection: 'row',
    display: 'flex',
  }
}

export default LoginFormField;
