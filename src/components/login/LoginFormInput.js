import React from 'react';
import Radium from 'radium';

var LoginFormInput = React.createClass(Radium.wrap({
  propTypes: {
    class: React.PropTypes.string.isRequired
    type: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
  },
  defaultProps: {
    placeholder: ""
  },
  render: function() {
    return (
      <input style={[{this.props.class}]} type={this.props.type} placeholder={this.props.placeholder} name={this.props.name}/>
    );
  }
}));
var styles = {
  firstBox: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    fontSize: '24px',
    paddingLeft: '5px',
    padding: '13px 0px 5px 5px',
    fontFamily: 'Marion',
    outline: 'none'
  }
  lastBox {
    borderBottomLeftRadius: '5px',
    borderBoTomRightRadius: '5px',
    fontSize: '24px',
    paddingLeft: '5px',
    padding: '13px 0px 5px 5px',
    fontFamily: 'Marion',
    outline: 'none'
  }
  innerBox {
    borderRadius: '1px',
    fontSize: '24px',
    paddingLeft: '5px',
    padding: '13px 0px 5px 5px',
    fontFamily: 'Marion',
    outline: 'none'
  }
}

export default LoginFormInput;
