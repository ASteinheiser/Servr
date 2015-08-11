import React from 'react';
import Radium from 'radium';

var FormField = React.createClass({
  render () {
    return (

      <div style={[styles.formField]}>{this.props.children}</div>
    );
  }
});

FormField = Radium(FormField);

var styles = {
  formField: {

    flexDirection: 'row',
    display: 'flex',
  }
}

export default FormField;
