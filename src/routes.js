import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeScreen from './screens/HomeScreen';
import UsersScreen from './screens/UsersScreen';

export default (
    <Route path="/">
        <IndexRoute component={ HomeScreen }/>
        <Route path="/users" component={ UsersScreen } />
    </Route>
);
