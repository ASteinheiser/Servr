import React from 'react';
import Radium from 'radium';

var NotFoundPage = React.createClass({
  render () {
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

    display: 'flex',
    backgroundColor: 'rgb(210,210,210)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  NotFoundText: {

    fontSize: '50px',
    fontFamily: 'sans-serif',
    fontWeight: 'lighter',
    color: 'rgb(75,75,75)',

    margin: 'auto auto 418px auto',
  }
}

export default NotFoundPage;
