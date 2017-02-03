import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import ContactsListItem from './ContactsListItem';
import styles from './ContactsList.scss';

@CSSModules(styles)
export default class extends Component {
  static propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    contacts: PropTypes.array.isRequired
  };

  renderContactColumn() {
    const { contacts } = this.props;

    if (!contacts.length) {
      return null;
    }

    return contacts.map((contact) => (
      <ContactsListItem key={ contact.id } contact={ contact } />
    ));
  }

  render() {
    return (
      <Table styleName='table'  striped bordered condensed hover>
        <thead>
          <tr>
            <th styleName='table-header'>First name</th>
            <th styleName='table-header'>Last name</th>
            <th styleName='table-header'>Phone number</th>
          </tr>
        </thead>
        <tbody>
          { this.renderContactColumn() }
        </tbody>
      </Table>
    );
  }
}
