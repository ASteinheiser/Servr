import React from 'react';
import Radium from 'radium';

import OverallRating from './overall-rating';
import RatingHeader from './rating-header';
import RatingBody from './rating-body';

var RatingForm = React.createClass({
  render () {
    return (

      <div style={[styles.overallRatingStyle]}>

        <OverallRating/>

        <RatingHeader name='Service' text='Service'/>
        <RatingBody name='Service'/>

        <RatingHeader name='Quality' text='Quality'/>
        <RatingBody name='Quality'/>

        <RatingHeader name='Fun' text='Fun'/>
        <RatingBody name='Fun'/>
      </div>
    );
  }
});

RatingForm = Radium(RatingForm);

var styles = {
  overallRatingStyle: {

    backgroundColor: 'blue',
  }
}

export default RatingForm;
