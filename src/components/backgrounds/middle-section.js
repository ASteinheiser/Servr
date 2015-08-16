import React from 'react';
import Radium from 'radium';

var MiddleSection = React.createClass({
  render () {
    return (
      <div style={[styles.middleSection]}>
        <div style={[styles.hiddenScrollbar]}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

MiddleSection = Radium(MiddleSection);

var styles = {
  middleSection: {

    backgroundColor: 'rgb(240,240,240)',
    WebkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',

    width: '100%',
    height: '100%',
    maxWidth: '900px',
    margin: '0 auto',

    overflow: 'hidden',
  },
  hiddenScrollbar: {

    width: '100%',
    height: '100%',

    overflow: 'auto',
    paddingRight: '20px',
  }
}

export default MiddleSection;
