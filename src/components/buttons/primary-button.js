import React from 'react';
import Radium from 'radium';

var PrimaryButton = React.createClass({
  propTypes: {

    type: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <button style={[styles.primaryButton]} type={this.props.type} name={this.props.name}>
        {this.props.text}
      </button>
    );
  }
});

PrimaryButton = Radium(PrimaryButton);

var styles = {
  primaryButton: {

    fontSize: '22px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',
    color: 'rgb(240,240,240)',
    backgroundColor: 'rgb(72, 124, 236)',

    width: '100%',
    padding: '10px',
    marginTop: '10px',

    border: 'none',
    outline: 'none',
    borderRadius: '2px',

    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',

    cursor: 'pointer',

    ':hover': {

      backgroundColor: 'rgb(50, 100, 205)',
    },

    ':active': {

      backgroundColor: 'rgb(72, 124, 236)',
    }
  }
}

export default PrimaryButton;
