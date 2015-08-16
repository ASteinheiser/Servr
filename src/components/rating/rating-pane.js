import React from 'react';
import Radium from 'radium';

var RatingPane = React.createClass({
  render () {
    return (
      <div style={[styles.ratingPane]}>
        {this.props.children}
      </div>
    );
  }
});

RatingPane = Radium(RatingPane);

var styles = {
  ratingPane: {

    display: 'flex',
    width: '40%',

    justifyContent: 'center',
    flexDirection: 'column',
  }
}

export default RatingPane;
