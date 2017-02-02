import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import UsersListItem from './UsersListItem';
import UsersListSortIcon from './UsersListSortIcon';

import styles from './UserList.scss';

@CSSModules(styles)
export default class extends Component {
  static propTypes = {
    changeRouteState: PropTypes.func.isRequired,
    className: PropTypes.string,
    deleteUser: PropTypes.func.isRequired,
    sort: PropTypes.object,
    users: PropTypes.array.isRequired
  };

  renderUsers() {
    const { users, deleteUser } = this.props;

    if (!users.length) {
      return null;
    }

    return users.map((user) => (
      <UsersListItem key={ user.id } user={ { ...user } } deleteUser={ deleteUser } />
    ));
  }

  render() {
    const firstName = 'firstName';
    const lastName = 'lastName';
    const email = 'email';
    const status = 'status';

    const { className, sort, changeRouteState } = this.props;

    return (
      <Table className={ className } striped bordered condensed hover>
        <thead>
          <tr>
            <th styleName='header' onClick={ () => changeRouteState({ sort: firstName }) }>
              <UsersListSortIcon sort={ sort } name={ firstName }>First Name</UsersListSortIcon>
            </th>
            <th styleName='header' onClick={ () => changeRouteState({ sort: lastName }) }>
              <UsersListSortIcon sort={ sort } name={ lastName }>Last Name</UsersListSortIcon>
            </th>
            <th styleName='header' onClick={ () => changeRouteState({ sort: email }) }>
              <UsersListSortIcon sort={ sort } name={ email }>Email</UsersListSortIcon>
            </th>
            <th styleName='header' onClick={ () => changeRouteState({ sort: status }) }>
              <UsersListSortIcon sort={ sort } name={ status }>Status</UsersListSortIcon>
            </th>
            <th styleName='header'> Actions</th>
          </tr>
        </thead>
        <tbody>
          { this.renderUsers() }
        </tbody>
      </Table>
    );
  }
}
