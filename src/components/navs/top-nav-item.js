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
    color: 'rgb(175, 175, 175)',
    margin: '0 10px',
    cursor: 'pointer',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',
    ':hover': {
      color: 'rgb(215, 215, 215)',
    }
  }
}

export default TopNavItem;
