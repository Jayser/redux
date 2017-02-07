import React, { Component, cloneElement, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as widgetActions from '../widgets';

const USERS_PER_PAGE = 5;

const getContacts = (contacts) => {
  const query = browserHistory.getCurrentLocation().query;
  const activePage = Number(query.page || contacts.activePage);
  const from =  (activePage - 1) * USERS_PER_PAGE;
  const to = from + USERS_PER_PAGE;

  return {
      ...contacts,
      activePage,
      count: contacts.data.length,
      data: contacts.data.slice(from, to)
  }
};

@connect(
  ({ contacts }) => ({
    contacts: getContacts(contacts)
  }),
  (dispatch) => ({
    actions: bindActionCreators(widgetActions, dispatch)
  })
)
export default class extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    contacts: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        { ' | ' }
        <Link to='/contacts'>Contacts list</Link>
        { ' | ' }
        <Link to='/contacts/create-contact'>Create contact</Link>
        {
          cloneElement(this.props.children, {
            contacts: this.props.contacts,
            actions: this.props.actions
          })
        }
      </div>
    )
  }
}
