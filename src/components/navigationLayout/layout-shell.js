import React from 'react';
import Radium from 'radium';

import BlankBackground from '../parts/pageBackgrounds/blank-background';
import TopNav from '../parts/navs/top-nav';
import MiddleSection from '../parts/pageBackgrounds/middle-section';

var LayoutShell = React.createClass({
  render () {
    return (

      <BlankBackground>

        <TopNav/>

        <MiddleSection>
          {this.props.children}
        </MiddleSection>

      </BlankBackground>
    );
  }
});

LayoutShell = Radium(LayoutShell);

export default LayoutShell;
