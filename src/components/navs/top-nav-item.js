import React from 'react';
import Radium from 'radium';

var TopNavItem = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      <a style={[styles.navBarItem]}>{this.props.text}</a>
    );
  }
});

TopNavItem = Radium(TopNavItem);

var styles = {
  navBarItem: {
    color: 'rgb(215, 215, 215)',
    margin: '0 10px',
    cursor: 'pointer',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    WebkitFontSmoothing: 'antialiased',
    height: '46',
    display: 'flex',
    alignItems: 'center',
    ':hover': {
      color: 'rgb(72, 124, 236)',
    }
  }
}

export default TopNavItem;
