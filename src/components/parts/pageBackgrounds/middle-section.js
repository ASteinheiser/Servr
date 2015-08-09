import React from 'react';
import Radium from 'radium';

var MiddleSecion = React.createClass({
  render () {
    return (

      <div style={[styles.middleSection]}>
        {this.props.children}
      </div>
    );
  }
});

MiddleSecion = Radium(MiddleSecion);

var styles = {

  middleSection: {

    backgroundColor: 'rgb(230,230,230)',
    WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

    flex: 1,
    width: '80%',
    margin: '0 auto',

    overflow: 'scroll',
  }
}

export default MiddleSecion;
