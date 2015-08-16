import React from 'react';

import RatingBox from '../backgrounds/rating-box';
import RatingPane from './rating-pane';
import RatingForm from './rating-form';
import CommentPane from '../comment/comment-pane';
import CommentBox from '../comment/comment-box';

var RatingComponent = React.createClass({
  render () {
    return (

      <RatingBox>

        <RatingPane>
          <RatingForm />
        </RatingPane>

        <CommentPane>
          <CommentBox
            name='rating comment'
            placeholder='Additional comments...' />
        </CommentPane>

      </RatingBox>
    );
  }
});

export default RatingComponent;
