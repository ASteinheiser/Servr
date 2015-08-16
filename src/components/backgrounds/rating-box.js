import React from 'react';
import Radium from 'radium';

var RatingBox = React.createClass({
  render () {
    return (
      <div style={[styles.ratingBox]}>
        {this.props.children}
      </div>
    );
  }
});

RatingBox = Radium(RatingBox);

var styles = {
  ratingBox: {

    backgroundColor: 'rgb(36, 41, 46)',
    WebkitBoxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',

    display: 'flex',
    height: '300px',

    borderRadius: '5px',
    margin: '10px 5px',
  }
}

export default RatingBox;
