import _ from "lodash";
import React from "react";
import Firebase from "firebase";
import ReactFire from 'reactfire';

import CommentListItem from "./comment-list-item";
import CommentForm from "./comment-form";

var CommentList = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      items: []
    }
  },

  componentWillMount: function() {
    var ref = new Firebase("https://sizzling-torch-3506.firebaseio.com/comments");

    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.items.push(dataSnapshot.val());
      this.setState({
        items: this.items
      });
    }.bind(this));

    this.firebaseRef.off();
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
