import React from 'react';
import Radium from 'radium';

import TopNav from '../navs/top-nav';
import MiddleSection from '../MiddleSection/middle-section';

var HomePage = React.createClass({
  render: function() {
    return (
      <div style={[styles.homePageBackground]}>
        <TopNav/>
        <MiddleSection/>
      </div>
    );
  }
});

HomePage = Radium(HomePage);

var styles = {
  homePageBackground: {
    backgroundColor: 'rgb(230,230,230)',
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
