import React from 'react';
import { Link } from 'react-router';

import UsersView from '../../features/users/UsersView';

import './UsersScreen.scss';

export default () => (
    <main>
        <h1>Users page</h1>
        <Link to="/">Home page</Link>
        <UsersView />
    </main>
);