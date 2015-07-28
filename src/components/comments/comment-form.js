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
  },

  handleChange: function() {

  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={this.state.text} onChange={this.handleChange}/>
        <div>
          <button>Add Comment</button>
        </div>
      </form>
    )
  }
});

export default CommentForm;
