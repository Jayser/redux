import React, { Component, PropTypes } from 'react';

export default class extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  render() {
    const {
      contact: {
        firstName,
        lastName,
        phoneNumber,
      }
    } = this.props;

    return (
      <tr>
        <td>{ firstName }</td>
        <td>{ lastName }</td>
        <td>{ phoneNumber }</td>
      </tr>
    );
  }
}
