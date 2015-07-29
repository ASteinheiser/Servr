import _ from "lodash";
import React from "react";

import CommentListItem from "./comment-list-item";
import CommentForm from "./comment-form";

var CommentList = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      comments: []
    }
  },

  componentWillMount: function() {
    var ref = new Firebase("https://sizzling-torch-3506.firebaseio.com/comments");
    this.bindAsArray(ref, "comments");
  },

  render: function() {
    console.log(this.state.comments);
    var commentListItems = _.map(this.state.comments, function(comment, index) {
      return (
        <CommentListItem text={comment.text} />
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
