import React from 'react';
import Radium from 'radium';

var BlankBackground = React.createClass({
  render () {
    return (
      <div style={[styles.blankBackground]}>
        {this.props.children}
      </div>
    );
  }
});

BlankBackground = Radium(BlankBackground);

var styles = {
  blankBackground: {

    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(240,240,240)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default BlankBackground;
