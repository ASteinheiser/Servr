import React from 'react';
import DashboardPage from '../components/dashboard/dashboard-page';

var DashboardRoute = React.createClass({
  componentDidMount: function () {
    var id = this.props.params.id;
    fetchMessage(id, function (err, message) {
      this.setState({ message: message });
    })
  },
  render () {
    return <DashboardPage />;
  }
});

export default DashboardRoute;
