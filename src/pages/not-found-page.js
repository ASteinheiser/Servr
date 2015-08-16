import React from 'react';
import Radium from 'radium';

import BlankBackground from '../components/backgrounds/blank-background';

var NotFoundPage = React.createClass({
  render () {
    return (
      <BlankBackground>
        <div style={[styles.centerText]}>

          <font>Page Not Found</font>

        </div>
      </BlankBackground>
    );
  }
});

NotFoundPage = Radium(NotFoundPage);

var styles = {
  centerText: {

    fontSize: '50px',
    fontFamily: 'sans-serif',
    fontWeight: 'lighter',
    color: 'rgb(75,75,75)',

    margin: 'auto auto 418px auto',

    cursor: 'default',
  }
}

export default NotFoundPage;
