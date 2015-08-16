import React from 'react';
import Radium from 'radium';

var FormTitle = React.createClass({
  render () {
    return (
      <h1 style={[styles.servrServ]}>

        <font>Serv</font>
        <font style={[styles.servrR]}>r</font>

      </h1>
    );
  }
});

FormTitle = Radium(FormTitle);

var styles = {
  servrServ: {

    fontSize: '60px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',

    textAlign: 'center',
    margin: '-15px 0px 15px 0px',
    WebkitFontSmoothing: 'antialiased',

    cursor: 'default',
  },
  servrR: {

    color: 'rgb(72, 124, 236)',
  },
}

export default FormTitle;
