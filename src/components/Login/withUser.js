import React from 'react';

import { UserContext } from '../../context/UserState';

const withUser = ComposedComponent => props => (
  <UserContext.Consumer>
    {user => <ComposedComponent {...props} {...user} />}
  </UserContext.Consumer>
);

export default withUser;