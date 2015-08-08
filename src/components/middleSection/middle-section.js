import React from 'react';
import Radium from 'radium';

var MiddleSecion = React.createClass({
  render () {
    return (

      <div style={[styles.middleSection]}/>
    );
  }
});

MiddleSecion = Radium(MiddleSecion);

var styles = {

  middleSection: {
    
    backgroundColor: 'red',
  }
}

export default MiddleSecion;
