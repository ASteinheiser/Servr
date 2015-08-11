import React from 'react';
import Radium from 'radium';

var SecondaryButton = React.createClass({
  propTypes: {

    type: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <button style={[styles.secondaryButton]} type={this.props.type} name={this.props.name}>
        {this.props.text}
      </button>
    );
  }
});

SecondaryButton = Radium(SecondaryButton);

var styles = {
  secondaryButton: {

    fontSize: '16px',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',
    color: 'rgb(72, 124, 236)',
    backgroundColor: 'transparent',

    width: '100%',
    padding: '7px',
    marginTop: '10px',

    borderRadius: '2px',
    border: '2px solid rgb(72, 124, 236)',
    outline: 'none',

    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',

    cursor: 'pointer',

    ':hover': {

      color: 'white',
      backgroundColor: 'rgb(50, 100, 205)',

      border: '2px solid rgb(50, 100, 205)',
    },

    ':active': {

      backgroundColor: 'rgb(72, 124, 236)',

      border: '2px solid rgb(72, 124, 236)',
    }
  }
}

export default SecondaryButton;
