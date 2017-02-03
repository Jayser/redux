import React from 'react';
import { Route } from 'react-router';

import NotFound from './features/NotFound';
import App from './features/App';
import ContactsView from './features/contacts/ContactsView';

export default (
  <Route path='/' component={ App }>
    { ContactsView() }
    <Route path='*' component={ NotFound } />
  </Route>
);
