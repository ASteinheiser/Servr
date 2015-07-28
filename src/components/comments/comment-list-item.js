import React from "react";

var CommentListItem = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <li>{this.props.text}</li>
    )
  }
});

export default CommentListItem;
