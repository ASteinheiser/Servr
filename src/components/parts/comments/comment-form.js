import _ from "lodash";
import React from "react";

var CommentForm = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.firebaseRef.push({
      text: this.state.text
    });
    this.setState({text: ''});
  },

  handleChange: function(e) {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name='text' value={this.state.text} onChange={this.handleChange}/>
        <div>
          <button>Add Comment</button>
        </div>
      </form>
    )
  }
});

export default CommentForm;
