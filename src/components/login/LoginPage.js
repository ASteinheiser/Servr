import React from 'react';
import Radium from 'radium';

import LoginForm from './LoginForm';

var LoginPage = React.createClass({
  render: function() {
    return (
      <div style={[styles.loginBackground]}>
        <div>
          <div style={[styles.loginBoxOpaque]}>
            <h1 style={[styles.servrTitle]}>Servr</h1>
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
});

LoginPage = Radium(LoginPage);

var styles = {
  loginBackground: {
    backgroundImage: '',
    cover: '',
    backgroundColor: 'gray',
    margin: 'auto',
    marginTop: '198px',
  },
  servrTitle: {
    fontSize: '70px',
    textAlign: 'center',
    marginTop: '-20px',
    marginBottom: '25px',
  },
  loginBoxOpaque: {
    padding: '40px',
    backgroundColor: 'rgba(192, 192, 192, 0.5)',
    borderRadius: '10px',
  },
}

export default LoginPage;
