import React from 'react';
import Radium from 'radium';

var LoginButton = React.createClass(Radium.wrap({
  propTypes: {
    buttonText: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <button style={[styles.loginButton]}>{this.props.buttonText}</button>
    );
  }
}));

var styles = {
  loginButton: {
    marginTop: '10px',
    borderRadius: '14px',
    width: '100%',
    backgroundColor: 'rgba(132, 175, 224, 1)',
    fontSize: '16px',
    lineHeight: 1.5,
    cursor: 'pointer',
    paddingTop: '5px',
    fontFamily: 'Marion',
    border: '0px',
    outline: 'none',

    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString()
    }
  }
}

export default LoginButton;
