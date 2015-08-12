import React from 'react';
import Radium from 'radium';

var CommentBox = React.createClass({
  render () {
    return (

      <div style={[styles.commentBoxStyle]}>
        Comment Box is here!!
      </div>
    );
  }
});

CommentBox = Radium(CommentBox);

var styles = {
  commentBoxStyle: {

    backgroundColor: 'orange',
  }
}

export default CommentBox;
