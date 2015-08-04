import React from 'react';
import Radium from 'radium';

import TopNav from '../navs/top-nav';

var HomePage = React.createClass({
  render: function() {
    return (
      <div style={[styles.NotFoundBackground]}>
        <TopNav/>
      </div>
    );
  }
});

HomePage = Radium(HomePage);

var styles = {
  servrTitle: {
    fontSize: '60px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',
    textAlign: 'center',
    margin: '-15px 0px 15px 0px',
    cursor: 'default',
    WebkitFontSmoothing: 'antialiased',
  },
  servrTitleR: {
    color: 'rgb(72, 124, 236)',
  },
  NotFoundBackground: {
    backgroundColor: 'rgb(210,210,210)',
    backgroundSize: 'cover',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default HomePage;
