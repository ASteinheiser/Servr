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

    flex: 1,
    backgroundColor: 'rgb(230,230,230)',
    WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

    width: '100%',
    margin: '0 auto',
    maxWidth: '900px',

    overflow: 'scroll',
  }
}

export default MiddleSecion;
