import React from 'react';
import Radium from 'radium';

var CommentBox = React.createClass({
  render () {
    return (

      <input style={[styles.commentBoxStyle]} />
    );
  }
});

CommentBox = Radium(CommentBox);

var styles = {
  commentBoxStyle: {

    width: '96.5%',
    height: '270px',
    margin: '12px 0',
    display: 'flex',
  }
}

export default CommentBox;
