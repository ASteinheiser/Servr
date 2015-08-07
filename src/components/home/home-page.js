import React from 'react';
import Radium from 'radium';

import TopNav from '../navs/top-nav';

var HomePage = React.createClass({
  render: function() {
    return (
      <div style={[styles.homePageBackground]}>
        <TopNav/>
      </div>
    );
  }
});

HomePage = Radium(HomePage);

var styles = {
  homePageBackground: {
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
