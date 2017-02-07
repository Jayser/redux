import React from 'react';
import { Route } from 'react-router';

import NotFound from './features/NotFound';
import App from './features/App';
import Contacts from './features/contacts';

export default (
  <Route path='/' component={ App }>
    { Contacts() }
    <Route path='*' component={ NotFound } />
  </Route>
);
