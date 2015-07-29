import React from 'react';
import Radium from 'radium';

var SecondaryButton = React.createClass({
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
      <button style={[styles.secondaryButton]} type={this.props.type} name={this.props.name}>
        {this.props.text}
      </button>
    );
  }
});

SecondaryButton = Radium(SecondaryButton);

var styles = {
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'rgb(72, 124, 236)',
    width: '100%',
    fontSize: '16px',
    padding: '7px',
    marginTop: '10px',
    borderRadius: '2px',
    border: '2px solid rgb(72, 124, 236)',
    outline: 'none',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease',
    cursor: 'pointer',
    WebkitFontSmoothing: 'antialiased',

    ':hover': {
      color: 'white',
      backgroundColor: 'rgb(50, 100, 205)',
      border: '2px solid rgb(50, 100, 205)',
    }
  }
}

export default SecondaryButton;
