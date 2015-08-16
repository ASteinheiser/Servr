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

          <div style={[styles.ratingModuleButtons]}>
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

RatingModule = Radium(RatingModule);

var styles = {
  ratingModule: {

    backgroundColor: 'rgba(10, 10, 10, 0.9)',
    WebkitBoxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',

    display: 'flex',
    height: '300px',

    borderRadius: '5px',
    margin: '10px 5px',
  },
  ratingModuleButtons: {

    width: '70%',
    margin: '0px auto',
  },
  firstPane: {

    display: 'flex',
    width: '45%',

    justifyContent: 'center',
    flexDirection: 'column',
  },
  secondPane: {

    width: '55%',
  }
}

export default RatingModule;