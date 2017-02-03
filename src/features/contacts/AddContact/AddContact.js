import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { reduxForm, propTypes } from 'redux-form';

import { FormField } from '../../../shared/forms';

@reduxForm({
  form: 'contacts/form/ADD',
  validate: (values) => {

    // TODO: Temporarily solution
    const errors = {};

    if (!values.firstName) { errors.firstName = 'Required'; }
    if (!values.lastName) { errors.lastName = 'Required'; }

    return errors
  }
})
export default class extends Component {
  static propTypes = propTypes;

  @autobind onSubmit() {
      console.log('success');
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit) }>
        <FormField name='firstName' type='text' component='input' label='First Name*' />
        <FormField name='lastName' type='text' component='input' label='Last Name*' />
        <FormField name='phoneNumber' type='text' component='input' label='Phone Number' />
        <div>
          <button type='submit' disabled={ submitting }>Add Contact</button>
          <button type='button' disabled={ pristine || submitting } onClick={ reset }>Clear</button>
        </div>
      </form>
    );
  }
}
