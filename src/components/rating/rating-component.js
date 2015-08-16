import React from 'react';
import Radium from 'radium';

import RatingForm from './rating-form';
import CommentBox from '../comment/comment-box';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

var RatingComponent = React.createClass({
  render () {
    return (

      <div style={[styles.ratingComponent]}>

        <div style={[styles.firstPane]}>
          <RatingForm />

          <div style={[styles.ratingComponentButtons]}>
            <PrimaryButton name='rate' type='submit' text='Rate' />
            <SecondaryButton name='cancel' type='submit' text='Cancel' />
          </div>
        </div>

        <div style={[styles.secondPane]}>
          <CommentBox />
        </div>

      </div>
    );
  }
});

RatingComponent = Radium(RatingComponent);

var styles = {
  ratingComponent: {

    backgroundColor: 'rgb(36, 41, 46)',
    WebkitBoxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',

    display: 'flex',
    height: '300px',

    borderRadius: '5px',
    margin: '10px 5px',
  },
  ratingComponentButtons: {

    width: '90%',
    margin: '10px auto 0px auto',
  },
  firstPane: {

    display: 'flex',
    width: '40%',

    justifyContent: 'center',
    flexDirection: 'column',
  },
  secondPane: {

    width: '60%',
  }
}

export default RatingComponent;
