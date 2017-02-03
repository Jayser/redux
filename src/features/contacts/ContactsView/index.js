import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ContactsView from './ContactsView';
import AddContact from '../AddContact';

export default () => (
  <Route path='contacts'>
    <IndexRoute component={ ContactsView } />
    <Route path='add-contact' component={ AddContact } />
  </Route>
);
