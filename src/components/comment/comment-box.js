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

    width: '91%',
    height: '260px',
    margin: '15px auto',
    display: 'flex',
  }
}

export default CommentBox;
