import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default class UsersListItem extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        deleteUser: PropTypes.func
    };

    render() {
        const {
            user: {
                firstName,
                lastName,
                email,
                status,
                id
            },
            deleteUser
        } = this.props;

        return (
            <tr>
                <td>{ firstName }</td>
                <td>{ lastName }</td>
                <td>{ email }</td>
                <td className="text-center">
                    { status ? 'ACTIVE' : 'INACTIVE'}
                </td>
                <td className="text-center">
                    <Button bsStyle="danger" onClick={ () => deleteUser(id) }>Delete</Button>
                </td>
            </tr>
        )
    }
}