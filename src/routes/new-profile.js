import React from 'react';
import NewProfile from '../components/newProfile/new-profile-page';

var NewProfileRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
  render () {
    return <NewProfile />;
  }
});

export default NewProfileRoute;
