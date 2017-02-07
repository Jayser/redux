import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    handleRemoveContact: PropTypes.func.isRequired,
    handleUpdateContact: PropTypes.func.isRequired
  };

  render() {
    const {
      contact: {
        _id,
        firstName,
        lastName,
        phoneNumber,
      },
      handleRemoveContact,
    } = this.props;

    return (
      <tr>
        <td>{ firstName }</td>
        <td>{ lastName }</td>
        <td>{ phoneNumber }</td>
        <td className='text-center'>
          <LinkContainer to={ { pathname: `/contacts/update-contact`, query: { contactId: _id } } }>
            <Button bsStyle='primary'>edit</Button>
          </LinkContainer>
          { ' ' }
          <Button bsStyle='danger' onClick={ () => handleRemoveContact(_id) }>delete</Button>
        </td>
      </tr>
    );
  }
}
