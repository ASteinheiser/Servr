import React from 'react';
import Radium from 'radium';

var OverallRating = React.createClass({
  render () {
    return (
      
      <div style={[styles.overallRatingStyle]}>
        Overall Rating!!!
      </div>
    );
  }
});

OverallRating = Radium(OverallRating);

var styles = {
  overallRatingStyle: {

    color: 'purple',
    fontSize: '30px',
  }
}

export default OverallRating;
