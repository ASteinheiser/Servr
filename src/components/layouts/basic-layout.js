import React from 'react';

import BlankBackground from '../page-backgrounds/blank-background';
import TopNav from '../top-nav/top-nav';
import MiddleSection from '../page-backgrounds/middle-section';

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

export default LayoutShell;
