import React from 'react';
import Radium from 'radium';

var NavTitle = React.createClass({
  render () {
    return (
      <h1 style={[styles.servrServ]}>

        <font>Serv</font>
        <font style={[styles.servrR]}>r</font>

      </h1>
    );
  }
});

NavTitle = Radium(NavTitle);

var styles = {
  servrServ: {

    fontSize: '26px',
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',
    WebkitFontSmoothing: 'antialiased',

    margin: 'auto 0px auto 15px',

    cursor: 'default',
  },
  servrR: {

    color: 'rgb(72, 124, 236)',
  }
}

export default NavTitle;
