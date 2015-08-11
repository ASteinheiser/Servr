import React from 'react';
import SignupPage from '../components/signup/signup-page';

var SignupRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
  render () {
    return <SignupPage />;
  }
});

export default SignupRoute;
