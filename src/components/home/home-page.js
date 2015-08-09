import React from 'react';
import Radium from 'radium';

import BlankBackground from '../parts/pageBackgrounds/blank-background';
import TopNav from '../parts/navs/top-nav';
import MiddleSection from '../parts/pageBackgrounds/middle-section';

var HomePage = React.createClass({
  render () {
    return (

      <BlankBackground>

        <TopNav/>

        <MiddleSection/>

      </BlankBackground>
    );
  }
});

HomePage = Radium(HomePage);

export default HomePage;
