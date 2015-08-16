import React from 'react';

import LayoutShell from '../components/layouts/basic-layout';
import RatingComponent from '../components/rating/rating-component';

var AccountPage = React.createClass({
  render () {
    return (
      <LayoutShell>
        <RatingComponent/>
      </LayoutShell>
    );
  }
});

export default AccountPage;
