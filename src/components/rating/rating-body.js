import React from 'react';
import Radium from 'radium';

var RatingBody = React.createClass({
  propTypes: {

    name : React.PropTypes.string.isRequired,
  },

  render () {
    return (

      <input
        type='radio'
        style={[styles.ratingBodyStyle]}
        name={this.props.name}>
      </input>
    );
  }
});

RatingBody = Radium(RatingBody);

var styles = {
  ratingBodyStyle: {

    textAlign: 'center',
    margin: '0px 20px',
  }
}

export default RatingBody;
