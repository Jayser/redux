import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

// TODO: Temporarily solution
// should be import
// import { Input, Select ... } from 'fileName';
import Input from './Input';

const componentsMap = {
  input: Input
};

export default class extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  };

  render() {
    const { name, component, type, label } = this.props;

    const fieldProps = {
      name,
      type,
      label,
      component: componentsMap[component]
    };

    return (
      <Field { ...fieldProps } />
    );
  }
}
