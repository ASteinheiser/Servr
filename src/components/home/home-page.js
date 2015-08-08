import React from 'react';
import Radium from 'radium';

import TopNav from '../parts/navs/top-nav';
import MiddleSection from '../parts/middleSection/middle-section';

var HomePage = React.createClass({
  render () {
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

    display: 'flex',
    backgroundColor: 'rgb(230,230,230)',

    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default HomePage;
