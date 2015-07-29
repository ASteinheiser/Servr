import React from 'react';
import Radium from 'radium';

var LoginFormInput = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  },
  defaultProps: {
    placeholder: ""
  },
  render: function() {
    return (
      <input style={[styles.inputStyle]} type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}/>
    );
  }
});

LoginFormInput = Radium(LoginFormInput);

var styles = {
  inputStyle: {
    fontSize: '24px',
    marginBottom: '15px',
    padding: '5px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(43, 43, 43, 0)',
  }
}

export default LoginFormInput;
