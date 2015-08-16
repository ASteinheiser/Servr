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
        <RatingBody name='Service'/>
        <RatingBody name='Service'/>
        <RatingBody name='Service'/>
        <RatingBody name='Service'/>

        <RatingHeader name='Quality' text='Quality'/>
        <RatingBody name='Quality'/>
        <RatingBody name='Quality'/>
        <RatingBody name='Quality'/>
        <RatingBody name='Quality'/>
        <RatingBody name='Quality'/>

        <RatingHeader name='Food' text='Food'/>
        <RatingBody name='Food'/>
        <RatingBody name='Food'/>
        <RatingBody name='Food'/>
        <RatingBody name='Food'/>
        <RatingBody name='Food'/>
      </div>
    );
  }
});

RatingForm = Radium(RatingForm);

var styles = {
  overallRatingStyle: {

    textAlign: 'center',
  }
}

export default RatingForm;
