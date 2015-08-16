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
        style={[styles.ratingHeaderStyle]}
        name={this.props.name}>
        {this.props.text}
      </div>
    );
  }
});

RatingHeader = Radium(RatingHeader);

var styles = {
  ratingHeaderStyle: {

    fontSize: '18px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    WebkitFontSmoothing: 'antialiased',

    color: 'rgb(215, 215, 215)',
    textAlign: 'center',
  }
}

export default RatingHeader;
