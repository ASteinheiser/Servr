import React from 'react';
import Radium from 'radium';

import TopNavItem from './top-nav-item'

var TopNav = React.createClass({
  render () {
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
    WebkitFontSmoothing: 'antialiased',

    margin: 'auto 0px auto 15px',

    cursor: 'default',
  },
  servrTitleR: {

    color: 'rgb(72, 124, 236)',
  },
  navTab: {

    backgroundColor: 'rgb(36, 41, 46)',

    display: 'flex',
    width: '100%',
    height: '46px',
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
