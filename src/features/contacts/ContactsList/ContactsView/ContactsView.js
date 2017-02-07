import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import autobind from 'autobind-decorator';
import { browserHistory } from 'react-router';

import ContactsListItem from '../ContactsListItem';
import ContactsPagination from '../ContactsPagination';
import styles from './ContactsView.scss';

@CSSModules(styles)
export default class extends Component {
  static propTypes = {
    contacts: PropTypes.object,
    actions: PropTypes.object
  };

  componentWillMount() {
    this.props.actions.readContacts();
  }

  shouldComponentUpdate(nextState) {
    return Boolean(nextState.contacts.readLoaded);
  }

  renderContactColumn() {
    const {
      contacts: { data },
      actions: {
        updateContact,
        removeContact
      }
    } = this.props;

    return data.map((contact) => (
      <ContactsListItem
        key={ contact._id }
        contact={ contact }
        handleUpdateContact={ updateContact }
        handleRemoveContact={ removeContact } />
    ));
  }

  @autobind handleChangeRoute({ page }) {
    browserHistory.push(`/contacts/?page=${ page }`);
  }

  renderAddContactButton() {
    return(
      <section styleName='buttons-wrapper'>
        <LinkContainer to={ { pathname: '/contacts/create-contact' } }>
          <Button bsStyle='success'>Add contact</Button>
        </LinkContainer>
      </section>
    )
  }

  renderContactsList() {
    const { contacts: { data, readLoaded } } = this.props;

    if (!readLoaded || !data.length) {
      return <h2>Contacts List is empty</h2>
    }

    return (
      <div>
        <Table styleName='table' striped bordered condensed hover>
          <thead>
            <tr>
              <th styleName='table-header'>First name</th>
              <th styleName='table-header'>Last name</th>
              <th styleName='table-header'>Phone number</th>
              <th styleName='table-header'>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.renderContactColumn() }
          </tbody>
        </Table>
        <ContactsPagination
          activePage={ this.props.contacts.activePage }
          items={ this.props.contacts.count }
          onSelect={ this.handleChangeRoute } />
      </div>
    )
  }

  render() {
    const addContactButton = this.renderAddContactButton();
    const contactList = this.renderContactsList();

    return (
      <section styleName='root'>
        <h1>Contacts List</h1>
        { addContactButton }
        { contactList }
      </section>
    );
  }
}
