import { formatUrl } from '../../utils';

// Actions
const LOAD = 'contacts/LOAD';
const LOAD_SUCCESS = 'contacts/LOAD_SUCCESS';
const LOAD_FAIL = 'contacts/LOAD_FAIL';

const CREATE = 'contacts/CREATE';
const UPDATE = 'contacts/UPDATE';
const REMOVE = 'contacts/REMOVE';

import { LOCATION_CHANGE } from 'react-router-redux';
import { CALL_API } from 'redux-api-middleware';

// Reducer
const initialState = {
  loaded: false,
  data: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
          ...state,
          loading: true
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload,
        error: null
      };

    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };

    case LOCATION_CHANGE:
      return { ...state, activePage: 1 };

    default:
      return state;
  }
}

// Action Creators
export const loadContacts = () => {
  return {
    [CALL_API]: {
      endpoint: formatUrl('/contacts'),
      method: 'GET',
      types: [LOAD, LOAD_SUCCESS, LOAD_FAIL]
    }
  };
};

export function createContact(widget) {
  return { type: CREATE, widget };
}

export function updateContact(widget) {
  return { type: UPDATE, widget };
}

export function removeContact(widget) {
  return { type: REMOVE, widget };
}
