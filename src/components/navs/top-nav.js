import React from 'react';
import Radium from 'radium';

var TopNav = React.createClass({
  render: function() {
    return (
      <div style={[styles.navTab]}>
        <h1 style={[styles.servrTitle]}>
          <font>Serv</font>
          <font style={[styles.servrTitleR]}>r</font>
        </h1>
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
    textAlign: 'center',
    margin: '4px 0px 0px',
    cursor: 'default',
    WebkitFontSmoothing: 'antialiased',
  },
  servrTitleR: {
    color: 'rgb(72, 124, 236)',
  },
  navTab: {
    backgroundColor: 'rgb(72, 124, 236)',
    height: '10%',
    width: '100%',
  }
}

export default TopNav;
