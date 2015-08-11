import React from 'react';
import Radium from 'radium';

var FormTitle = React.createClass({
  render () {
    return (
      <h1 style={[styles.servrTitle]}>

        <font>Serv</font>
        <font style={[styles.servrTitleR]}>r</font>

      </h1>
    );
  }
});

FormTitle = Radium(FormTitle);

var styles = {
  servrTitle: {

    fontSize: '60px',
    fontWeight: 'lighter',
    fontFamily: 'sans-serif',
    color: 'rgb(215, 215, 215)',

    textAlign: 'center',
    margin: '-15px 0px 15px 0px',
    WebkitFontSmoothing: 'antialiased',

    cursor: 'default',
  },
  servrTitleR: {

    color: 'rgb(72, 124, 236)',
  },
}

export default FormTitle;
