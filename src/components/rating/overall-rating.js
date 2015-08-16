import React from 'react';
import Radium from 'radium';

var OverallRating = React.createClass({
  render () {
    return (

      <div style={[styles.overallRating]}>
        Total 0.0
      </div>
    );
  }
});

OverallRating = Radium(OverallRating);

var styles = {
  overallRating: {

    fontSize: '30px',
    color: 'rgb(215,215,215)',

    textAlign: 'center',
    marginBottom: '10px',
  }
}

export default OverallRating;
