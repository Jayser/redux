import { CALL_API } from 'redux-api-middleware';

import { formatUrl } from '../../utils';

// Actions
const CREATE = 'contacts/CREATE';
const CREATE_SUCCESS = 'contacts/CREATE_SUCCESS';
const CREATE_FAIL = 'contacts/CREATE_FAIL';

const READ = 'contacts/READ';
const READ_SUCCESS = 'contacts/READ_SUCCESS';
const READ_FAIL = 'contacts/READ_FAIL';

const READ_ONE = 'contacts/READ_ONE';
const READ_ONE_SUCCESS = 'contacts/READ_ONE_SUCCESS';
const READ_ONE_FAIL = 'contacts/READ_ONE_FAIL';

const REMOVE = 'contacts/REMOVE';
const REMOVE_SUCCESS = 'contacts/REMOVE_SUCCESS';
const REMOVE_FAIL = 'contacts/REMOVE_FAIL';

const UPDATE = 'contacts/UPDATE';
const UPDATE_SUCCESS = 'contacts/UPDATE_SUCCESS';
const UPDATE_FAIL = 'contacts/UPDATE_FAIL';

const CLEAR = 'contacts/CLEAR';

// Reducer
const initialState = {
  activePage: 1,
  data: []
};

export default function(state = initialState, action = {}) {
    switch (action.type) {
      // CREATE
      case CREATE:
        return {
          ...state,
          createLoading: true
        };
      case CREATE_SUCCESS:
        return {
          ...state,
          createLoading: false,
          createLoaded: true,
          data: state.data.concat(action.payload)
        };
      case CREATE_FAIL:
        return {
          ...state,
          createLoading: false,
          createLoaded: false,
          error: {
            HTTPError: action.payload.message,
            message: action.payload.response.message
          }
        };

      // READ
      case READ:
        return {
          ...state,
          readLoading: true
        };
      case READ_SUCCESS:
        return {
          ...state,
          readLoading: false,
          readLoaded: true,
          data: action.payload
        };
      case READ_FAIL:
        return {
          ...state,
          readLoading: false,
          readLoaded: false,
          error: {
            HTTPError: action.payload.message,
            message: action.payload.response.message
          }
        };

      // UPDATE
      case UPDATE:
        return {
          ...state,
          updateLoading: true
        };
      case UPDATE_SUCCESS:
        return {
          ...state,
          updateLoading: false,
          updateLoaded: true,
          data: action.payload.length ? action.payload : [action.payload]
        };
      case UPDATE_FAIL:
        return {
          ...state,
          updateLoading: false,
          updateLoaded: false,
          error: {
            HTTPError: action.payload.message,
            message: action.payload.response.message
          }
        };

      // READ ONE
      case READ_ONE:
        return {
          ...state,
          data: {},
          readOneLoading: true
        };
      case READ_ONE_SUCCESS:
        return {
          ...state,
          readOneLoading: false,
          readOneLoaded: true,
          data: action.payload
        };
      case READ_ONE_FAIL:
        return {
          ...state,
          readOneLoading: false,
          readOneLoaded: false,
          error: {
            HTTPError: action.payload.message,
            message: action.payload.response.message
          }
        };

      // REMOVE
      case REMOVE:
        return {
          ...state,
          removeLoading: true
        };
      case REMOVE_SUCCESS:
        return {
          ...state,
          removeLoading: false,
          removeLoaded: true,
          data: state.data.filter((contact) => contact._id !== action.payload._id)
        };
      case REMOVE_FAIL:
        return {
          ...state,
          removeLoading: false,
          removeLoaded: false,
          error: {
            HTTPError: action.payload.message,
            message: action.payload.response.message
          }
        };

      case CLEAR:
        return {
          ...initialState,
          data: state.data
        };

      default:
        return state;
    }
}

// Action Creators
export function createContact(body) {
  return {
    [CALL_API]: {
      endpoint: formatUrl('/contacts'),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      types: [CREATE, CREATE_SUCCESS, CREATE_FAIL],
      body: JSON.stringify(body)
    }
  };
}

export function readContacts() {
  return {
    [CALL_API]: {
      endpoint: formatUrl('/contacts'),
      method: 'GET',
      types: [READ, READ_SUCCESS, READ_FAIL]
    }
  };
}

export function readContact(contactId) {
  return {
    [CALL_API]: {
      endpoint: formatUrl(`/contacts/${ contactId }`),
      method: 'GET',
      types: [READ_ONE, READ_ONE_SUCCESS, READ_ONE_FAIL]
    }
  };
}

export function removeContact(contactId) {
  return {
    [CALL_API]: {
      endpoint: formatUrl(`/contacts/${ contactId }`),
      method: 'DELETE',
      types: [REMOVE, REMOVE_SUCCESS, REMOVE_FAIL]
    }
  };
}

export function updateContact(contactId, body) {
  return {
    [CALL_API]: {
      endpoint: formatUrl(`/contacts/${ contactId }`),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAIL],
      body: JSON.stringify(body)
    }
  };
}

export function clearState() {
    return { type: CLEAR };
  }
