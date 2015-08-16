import React from 'react';
import Radium from 'radium';

var OpaqueBox = React.createClass({
  render () {
    return (
      <div style={[styles.opaqueBox]}>
        {this.props.children}
      </div>
    );
  }
});

OpaqueBox = Radium(OpaqueBox);

var styles = {
  opaqueBox: {

    backgroundColor: 'rgba(10, 10, 10, 0.9)',

    padding: '30px',
    borderRadius: '5px',
    margin: '168px auto auto auto',
  }
}

export default OpaqueBox;
