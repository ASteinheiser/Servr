import React from 'react';
import Radium from 'radium';

var OverallRating = React.createClass({
  render () {
    return (

      <div style={[styles.overallRatingStyle]}>
        icon 0.0
      </div>
    );
  }
});

OverallRating = Radium(OverallRating);

var styles = {
  overallRatingStyle: {

    fontSize: '30px',
    color: 'rgb(215,215,215)',
    textAlign: 'center',
  }
}

export default OverallRating;
