import React from 'react';
import Radium from 'radium';

import RatingForm from './rating-form';
import CommentBox from '../comment/comment-box';
import PrimaryButton from '../buttons/primary-button';
import SecondaryButton from '../buttons/secondary-button';

var RatingModule = React.createClass({
  render () {
    return (

      <div style={[styles.ratingModuleStyle]}>

        <RatingForm />

        <CommentBox />

        <PrimaryButton />
        <SecondaryButton />
      </div>
    );
  }
});

RatingModule = Radium(RatingModule);

var styles = {
  ratingModuleStyle: {

    backgroundColor: 'red',
  }
}

export default RatingModule;
