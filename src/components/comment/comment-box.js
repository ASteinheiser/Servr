import React from 'react';
import Radium from 'radium';

var CommentBox = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string
  },

  getDefaultProps () {
    return {
        placeholder: '',
    };
  },

  render () {
    return (

      <textarea
        name={this.props.name}
        placeholder={this.props.placeholder}
        style={[styles.commentBox]} />
    );
  }
});

CommentBox = Radium(CommentBox);

var styles = {
  commentBox: {

    display: 'flex',
    height: '270px',
    width: '96.5%',
    margin: '12px 0',

    fontSize: '18px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    WebkitFontSmoothing: 'antialiased',

    outline: 'none',
  }
}

export default CommentBox;
