import React from 'react';
import Radium from 'radium';

var RatingHeader = React.createClass({
  render () {
    return (

      <div style={[styles.ratingHaderStyle]}>
        Rating Header!
      </div>
    );
  }
});

RatingHeader = Radium(RatingHeader);

var styles = {
  ratingHaderStyle: {

    color: 'orange',
  }
}

export default RatingHeader;
