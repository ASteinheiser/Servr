import React from 'react';
import Radium from 'radium';

import TopNavItem from './top-nav-item'

var TopNav = React.createClass({
  render: function() {
    return (
      <div style={[styles.navTab]}>
        <div style={[styles.servrTitle]}>
          <font>Serv</font>
          <font style={[styles.servrTitleR]}>r</font>
        </div>
        <div style={[styles.topNavTabs]}>
          <TopNavItem text='Dashboard'/>
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
    fontSize: '26px',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',
    textAlign: 'left',
    margin: 'auto 0px auto 15px',
    cursor: 'default',
    WebkitFontSmoothing: 'antialiased',
  },
  servrTitleR: {
    color: 'rgb(72, 124, 236)',
  },
  navTab: {
    display: 'flex',
    backgroundColor: 'rgb(36, 41, 46)',
    height: '46',
    width: '100%',
  },
  topNavTabs: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '10px',
  }
}

export default TopNav;
