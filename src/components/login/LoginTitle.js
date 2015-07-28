import React from 'react';
import Radium from 'radium';

var LoginTitle = React.createClass(Radium.wrap({
  render: function() {
    return (
      <div style={[styles.center]}>
        <a style={[styles.title]}>Serv</a><a style={[styles.titleR]}>r</a>
      </div>
    );
  }
}));

var styles = {
  center: {
    textAlign: 'center'
  },
  title: {
    fontWeight: 200,
    fontSize: '75px',
    color: 'rgba(237, 237, 237, 0.89)',
    cursor: 'default',
    marginTop: '20px',
    marginBottom: '10px'
  },
  titleR: {
    fontWeight: 200,
    fontSize: '75px',
    color: 'rgba(132, 175, 224, 1)',
    cursor: 'default',
    marginTop: '20px',
    marginBottom: '10px'
  }
}

export default LoginTitle;
