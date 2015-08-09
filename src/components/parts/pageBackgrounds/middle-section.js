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

    backgroundColor: 'rgb(230,230,230)',
    WebkitBoxShadow: '0px 0px 10px 0px rgb(130,130,130)',

    flex: 1,
    width: '80%',
    margin: '0 auto',

    overflow: 'scroll',

  }
}

export default MiddleSecion;
