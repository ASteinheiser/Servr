import React from 'react';
import Radium from 'radium';

var PrimaryButton = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
  },
  defaultProps: {
    name: '',
  },

  render: function() {
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
    backgroundColor: 'rgb(72, 124, 236)',
    color: 'rgb(240,240,240)',
    width: '100%',
    fontSize: '22px',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '2px',
    border: 'none',
    outline: 'none',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    cursor: 'pointer',
    WebkitFontSmoothing: 'antialiased',

    ':hover': {
      backgroundColor: 'rgb(50, 100, 205)',
    },

    ':active': {
      backgroundColor: 'rgb(72, 124, 236)',
    }
  }
}

export default PrimaryButton;
