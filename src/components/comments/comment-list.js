import _ from "lodash";
import React from "react";
import CommentListItem from "./comment-list-item";
import CommentForm from "./comment-form";

var CommentList = React.createClass({
  getInitialState: function() {
    return {
      comments: ["Comment #1", "Comm", "Comment 255y sakjdhfakjsh"]
    }
  },

  render: function() {
    var commentListItems = _.map(this.state.comments, function(comment, index) {
      return (
        <CommentListItem text={comment} />
      )
    });

    return (
      <ul>
        {commentListItems}

        <CommentForm/>
      </ul>
    )
  }
});

export default CommentList;
