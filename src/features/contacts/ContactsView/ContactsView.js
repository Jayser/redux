import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { LinkContainer } from 'react-router-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import * as widgetActions from '../widgets';

import ContactsList from '../ContactsList';
import styles from './ContactsView.scss';

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(widgetActions, dispatch)
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
@CSSModules(styles)
export default class extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    contacts: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.actions.loadContacts();
  }

  render() {
    const { data, loaded } = this.props.contacts;
    return (
      <section styleName='root'>
        <section styleName='buttons-wrapper'>
          <LinkContainer to={ { pathname: 'contacts/add-contact' } }>
            <Button bsStyle='success'>Add contact</Button>
          </LinkContainer>
        </section>
        <ContactsList isLoaded={ loaded } contacts={ data } />
      </section>
    );
  }
}
