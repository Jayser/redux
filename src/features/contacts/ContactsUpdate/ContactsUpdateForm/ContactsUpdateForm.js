import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { reduxForm, propTypes } from 'redux-form';
import { browserHistory } from 'react-router';

import { FormField } from '../../../../shared/forms';
import formValidation from '../../utils/formValidation';

@reduxForm({
  form: 'contacts/form/UPDATE',
  validate: formValidation
})
export default class extends Component {
  static propTypes = {
    ...propTypes,
    actions: PropTypes.object.isRequired,
    contacts: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);

    this.contactId = browserHistory.getCurrentLocation().query.contactId;
  }

  @autobind onSubmit(values) {
      this.props.actions.updateContact(this.contactId, {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber
      });
  }

  shouldComponentUpdate({ contacts: { data, updateLoaded }, dirty }) {
    // TODO: should be refactoring
    let contact = data;

    if (data.length) {
      contact = data.find((contact) => (contact._id === this.contactId));
    } else {
      contact = data;
    }

    if (!contact._id) {
      this.props.actions.readContact(this.contactId);
      return false;
    }

    if(updateLoaded) {
      browserHistory.push('/contacts');
      return false;
    }

    if (!dirty) {
      this.props.change('firstName', contact.firstName);
      this.props.change('lastName', contact.lastName);
      this.props.change('phoneNumber', contact.phoneNumber);
    }

    return true;
  }

  errorMessage() {
    const error = this.props.contacts.error;

    if (error){
      return (
        <div>
          <p>{ error.HTTPError }</p>
          <p>{ error.message }</p>
        </div>
      )
    }

    return null;
  }

  componentWillUnmount() {
    this.props.actions.clearState();
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className='text-center'>
        <h1>Edit Contact</h1>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <FormField
            name='firstName'
            type='text'
            component='input'
            label='First Name *'
            placeholder='input first name' />
          <FormField
            name='lastName'
            type='text'
            component='input'
            label='Last Name *'
            placeholder='input last name' />
          <FormField
            name='phoneNumber'
            type='text'
            component='input'
            label='Phone Number *'
            placeholder='input phone number' />
          { this.errorMessage() }
          <div>
            <button type='submit' disabled={ submitting }>Edit Contact</button>
            <button type='button' disabled={ pristine || submitting } onClick={ reset }>Clear</button>
          </div>
        </form>
      </div>
    );
  }
}
