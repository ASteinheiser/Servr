import React from 'react';
import Radium from 'radium';

var NavTitle = React.createClass({
  render () {
    return (

      <h1 style={[styles.servrTitle]}>

        <font>Serv</font>
        <font style={[styles.servrTitleR]}>r</font>

      </h1>
    );
  }
});

NavTitle = Radium(NavTitle);

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
  }
}

export default NavTitle;
