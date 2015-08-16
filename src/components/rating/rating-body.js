import React from 'react';
import Radium from 'radium';

var RatingBody = React.createClass({
  propTypes: {

    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  },

  render () {
    return (

      <input
        type='radio'
        style={[styles.ratingBody]}
        name={this.props.name}
        value={this.props.value}/>
    );
  }
});

RatingBody = Radium(RatingBody);

var styles = {
  ratingBody: {

    textAlign: 'center',
    margin: '0px 20px',
  }
}

export default RatingBody;
