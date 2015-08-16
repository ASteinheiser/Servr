import React from 'react';
import Radium from 'radium';

var RatingHeader = React.createClass({
  propTypes: {

    name : React.PropTypes.string.isRequired,
    text : React.PropTypes.string.isRequired,
  },

  render () {
    return (

      <div
        style={[styles.ratingHeader]}
        name={this.props.name}>
        {this.props.text}
      </div>
    );
  }
});

RatingHeader = Radium(RatingHeader);

var styles = {
  ratingHeader: {

    fontSize: '18px',
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    WebkitFontSmoothing: 'antialiased',

    color: 'rgb(215, 215, 215)',
    textAlign: 'center',
  }
}

export default RatingHeader;
