import React from 'react';

import LayoutShell from '../components/layouts/basic-layout';
import RatingModule from '../components/rating/rating-module';

var AccountPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <RatingModule/>
      </LayoutShell>
    );
  }
});

export default AccountPage;
