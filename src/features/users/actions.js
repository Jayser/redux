import * as types from './actionTypes';

export const deleteUser = id => ({ type: types.DELETE_USER, id });
export const searchUser = (field, query) => ({ type: types.SEARCH_USER, field, query });
export const sortUser = field => ({ type: types.SORT_USER, field });
export const userPage = page => ({ type: types.CHANGE_PAGE, page });
export const clearSearchFilter = () => ({ type: types.CLEAR_SEARCH_FILTER });
