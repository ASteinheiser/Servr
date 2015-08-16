import React from 'react';
import Radium from 'radium';

var FormInput = React.createClass({
  propTypes: {

    type: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  },

  defaultProps: {

    placeholder: ""
  },

  render () {
    return (
      <input
        style={[styles.inputField]}
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}/>
    );
  }
});

FormInput = Radium(FormInput);

var styles = {
  inputField: {

    fontSize: '24px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215,215,215)',
    WebkitFontSmoothing: 'antialiased',
    backgroundColor: 'rgba(43, 43, 43, 0)',

    marginBottom: '15px',
    padding: '5px',

    border: 'none',
    outline: 'none',
    boxShadow: '-7px 9px 0px -7px rgb(130,130,130), 7px 9px 0px -7px rgb(130,130,130)',

    ':focus': {

      boxShadow: '-7px 9px 0px -7px rgb(215,215,215), 7px 9px 0px -7px rgb(215,215,215)'
    }
  }
}

export default FormInput;
