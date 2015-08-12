import React from 'react';
import Radium from 'radium';

var RatingBody = React.createClass({
  render () {
    return (

      <div style={[styles.ratingBodyStyle]}>
        Rating Body
      </div>
    );
  }
});

RatingBody = Radium(RatingBody);

var styles = {
  ratingBodyStyle: {

    backgroundColor: 'green',
  }
}

export default RatingBody;
