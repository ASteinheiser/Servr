import React from 'react';
import Radium from 'radium';

var TopNavItem = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <a href={this.props.href} style={[styles.navBarItem]}>{this.props.text}</a>
    );
  }
});

TopNavItem = Radium(TopNavItem);

var styles = {
  navBarItem: {

    fontSize: '16px',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',
    WebkitFontSmoothing: 'antialiased',

    margin: '0 10px',

    cursor: 'pointer',
    textDecoration: 'none',

    ':hover': {

      color: 'rgb(72, 124, 236)',
    }
  }
}

export default TopNavItem;
