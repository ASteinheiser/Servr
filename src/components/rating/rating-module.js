import React from 'react';
import Radium from 'radium';

import RatingForm from './rating-form';
import CommentBox from '../comment/comment-box';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

var RatingModule = React.createClass({
  render () {
    return (

      <div style={[styles.ratingModule]}>

        <div style={[styles.firstPane]}>
          <RatingForm />

          <PrimaryButton name='rate' type='submit' text='Rate' />
          <SecondaryButton name='cancel' type='submit' text='Cancel' />
        </div>

        <div style={[styles.secondPane]}>
          <CommentBox />
        </div>

      </div>
    );
  }
});

RatingModule = Radium(RatingModule);

var styles = {
  ratingModule: {

    display: 'flex',

    backgroundColor: 'red',
  },
  firstPane: {

    width: '50%',
  },
  secondPane: {

    width: '50%',
  }
}

export default RatingModule;
