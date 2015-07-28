import React from 'react';
import Radium from 'radium';

var LoginFormField = React.createClass(Radium.wrap({
  render: function() {
    return (
      <div style={[styles.loginFormText]}>{this.props.children}</div>
    );
  }
}));

var styles = {
  loginFormText: {
    fontFamily: 'Arabic Typesetting',
    lineHeight: 1.5
  }
}

export default LoginFormField;
