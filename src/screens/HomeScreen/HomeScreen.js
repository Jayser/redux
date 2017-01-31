import React from 'react';
import { Link } from 'react-router';

export default () => (
    <main>
        <h1>Home page</h1>
        <Link to="/users">Users page</Link>
    </main>
);