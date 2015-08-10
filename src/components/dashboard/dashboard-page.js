import React from 'react';
import Radium from 'radium';

import LayoutShell from '../navigationLayout/layout-shell';

var DashboardPage = React.createClass({
  render () {
    return (

      <LayoutShell>
      </LayoutShell>

    );
  }
});

DashboardPage = Radium(DashboardPage);

export default DashboardPage;
