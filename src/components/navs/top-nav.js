import React from 'react';
import Radium from 'radium';

import TopNavItem from './top-nav-item'

var TopNav = React.createClass({
  render: function() {
    return (
      <div style={[styles.navTab]}>
        <h1 style={[styles.servrTitle]}>
          <font>Serv</font>
          <font style={[styles.servrTitleR]}>r</font>
        </h1>
        <div style={[styles.topNavTabs]}>
          <TopNavItem text='Notifications'/>
          <TopNavItem text='Account'/>
          <TopNavItem text='Log out'/>
        </div>
      </div>
    );
  }
});

TopNav = Radium(TopNav);

var styles = {
  servrTitle: {
    fontSize: '60px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',
    textAlign: 'left',
    margin: '4px 0px 0px 20px',
    cursor: 'default',
    WebkitFontSmoothing: 'antialiased',
  },
  servrTitleR: {
    color: 'rgb(72, 124, 236)',
  },
  navTab: {
    display: 'flex',
    backgroundColor: 'rgb(15, 0, 150)',
    height: '10%',
    width: '100%',
  },
  topNavTabs: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '20px',
  }
}

export default TopNav;
