import React from 'react';
import CommentList from './components/comments/comment-list';
import Rating from './components/rating/rating';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Servr!!!</h1>
        <Rating />
        <CommentList />
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'));
