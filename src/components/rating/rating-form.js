import React from 'react';
import Radium from 'radium';

import OverallRating from './overall-rating';
import RatingHeader from './rating-header';
import RatingBody from './rating-body';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

var RatingForm = React.createClass({
  render () {
    return (

      <div style={[styles.ratingForm]}>

        <OverallRating/>

        <RatingHeader name='Service' text='Service'/>
        <RatingBody name='Service' value='1'/>
        <RatingBody name='Service' value='2'/>
        <RatingBody name='Service' value='3'/>
        <RatingBody name='Service' value='4'/>
        <RatingBody name='Service' value='5'/>

        <RatingHeader name='Quality' text='Quality'/>
        <RatingBody name='Quality' value='1'/>
        <RatingBody name='Quality' value='2'/>
        <RatingBody name='Quality' value='3'/>
        <RatingBody name='Quality' value='4'/>
        <RatingBody name='Quality' value='5'/>

        <RatingHeader name='Food' text='Food'/>
        <RatingBody name='Food' value='1'/>
        <RatingBody name='Food' value='2'/>
        <RatingBody name='Food' value='3'/>
        <RatingBody name='Food' value='4'/>
        <RatingBody name='Food' value='5'/>

        <div style={[styles.ratingComponentButtons]}>

          <PrimaryButton name='rate' type='submit' text='Rate' />

          <a href='/#/dashboard'>
            <SecondaryButton name='cancel' type='submit' text='Cancel' />
          </a>

        </div>

      </div>
    );
  }
});

RatingForm = Radium(RatingForm);

var styles = {
  ratingForm: {

    textAlign: 'center',
  },
  ratingComponentButtons: {

    width: '90%',
    margin: '10px auto 0px auto',
  }
}

export default RatingForm;
