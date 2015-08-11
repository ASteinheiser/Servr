import React from 'react';
import Radium from 'radium';

var WaiterBackground = React.createClass({
  render () {
    return (
      <div style={[styles.signupBackground]}>
        {this.props.children}
      </div>
    );
  }
});

WaiterBackground = Radium(WaiterBackground);

var styles = {
  signupBackground: {

    display: 'flex',
    backgroundImage: 'url(src/images/waiter.jpg)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default WaiterBackground;
