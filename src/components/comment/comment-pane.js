import React from 'react';
import Radium from 'radium';

var CommentPane = React.createClass({
  render () {
    return (
      <div style={[styles.ratingPane]}>
        {this.props.children}
      </div>
    );
  }
});

CommentPane = Radium(CommentPane);

var styles = {
  ratingPane: {

    width: '60%',
  }
}

export default CommentPane;
