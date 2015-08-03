import React from 'react';
import Radium from 'radium';

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div style={[styles.NotFoundBackground]}>
        <div style={[styles.NotFoundText]}>
          <font>Page Not Found</font>
        </div>
      </div>
    );
  }
});

NotFoundPage = Radium(NotFoundPage);

var styles = {
  NotFoundBackground: {
    backgroundColor: 'rgb(210,210,210)',
    backgroundSize: 'cover',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  NotFoundText: {
    color: 'rgb(75,75,75)',
    fontFamily: 'sans-serif',
    fontWeight: 'lighter',
    fontSize: '50px',
    margin: 'auto auto 418px auto',
  }
}

export default NotFoundPage;
