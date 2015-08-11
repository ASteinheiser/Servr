import React from 'react';
import Radium from 'radium';

import NavTitle from './nav-title'
import TopNavItem from './top-nav-item'

var TopNav = React.createClass({
  render () {
    return (
      <div style={[styles.navTab]}>

        <NavTitle/>

        <div style={[styles.topNavTabs]}>
          <TopNavItem href='/#/dashboard' text='Dashboard'/>
          <TopNavItem href='/#/notifications' text='Notifications'/>
          <TopNavItem href='/#/account' text='Account'/>
          <TopNavItem href='/#/login' text='Log out'/>
        </div>

      </div>
    );
  }
});

TopNav = Radium(TopNav);

var styles = {
  navTab: {

    backgroundColor: 'rgb(36, 41, 46)',
    WebkitBoxShadow: '0px 1px 10px 0px rgba(0,0,0,0.75)',

    zIndex: 0,
    display: 'flex',
    width: '100%',
    minHeight: '46px',
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
