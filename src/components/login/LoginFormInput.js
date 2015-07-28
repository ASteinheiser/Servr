import React from 'react';
import '../../styles/login-styles.css';

var LoginFormInput = React.createClass({
  propTypes: {
    class: React.PropTypes.string.isRequired
    type: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  },
  defaultProps: {
    placeholder: ""
  },
  render: function() {
    return (
      <input className={this.props.class} type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}/>
    );
  }
});

export default LoginFormInput;
