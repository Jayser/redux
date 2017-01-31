import * as types from './actionTypes';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
    activePage: 1,
    data: [
        { id: 0, firstName: 'Richard', lastName: 'Hammond', email: 'Richard.Hammond@gmail.com', status: 1 },
        { id: 1, firstName: 'Abel', lastName: 'May', email: 'Abel.May@gmail.com', status: 0 },
        { id: 2, firstName: 'Bertram', lastName: 'May', email: 'Bertram.May@gmail.com', status: 0 },
        { id: 3, firstName: 'Brian', lastName: 'May', email: 'Brian.May@gmail.com', status: 0 },
        { id: 4, firstName: 'Cecil', lastName: 'May', email: 'Cecil.May@gmail.com', status: 0 },
        { id: 5, firstName: 'Dexter', lastName: 'Hammond', email: 'Dexter.Hammond@gmail.com', status: 1 },
        { id: 6, firstName: 'Duke', lastName: 'May', email: 'Duke.May@gmail.com', status: 0 },
        { id: 7, firstName: 'Eugene', lastName: 'May', email: 'Eugene.May@gmail.com', status: 0 },
        { id: 8, firstName: 'Howard', lastName: 'May', email: 'Howard.May@gmail.com', status: 0 },
        { id: 9, firstName: 'Kyle', lastName: 'May', email: 'Kyle.May@gmail.com', status: 0 },
        { id: 10, firstName: 'Lucian', lastName: 'Hammond', email: 'Lucian.Hammond@gmail.com', status: 1 },
        { id: 11, firstName: 'Norris', lastName: 'May', email: 'Norris.May@gmail.com', status: 0 },
        { id: 12, firstName: 'Roman', lastName: 'May', email: 'Roman.May@gmail.com', status: 0 },
        { id: 13, firstName: 'Theodore', lastName: 'May', email: 'Theodore.May@gmail.com', status: 0 },
        { id: 14, firstName: 'Warren', lastName: 'May', email: 'Warren.May@gmail.com', status: 0 },
        { id: 15, firstName: 'Wilson', lastName: 'Hammond', email: 'Wilson.Hammond@gmail.com', status: 1 },
        { id: 16, firstName: 'Xavier', lastName: 'May', email: 'Xavier.May@gmail.com', status: 0 },
        { id: 17, firstName: 'Zachary', lastName: 'May', email: 'Zachary.May@gmail.com', status: 0 },
        { id: 18, firstName: 'Immanuel', lastName: 'May', email: 'Immanuel.May@gmail.com', status: 0 },
        { id: 19, firstName: 'Jeremy', lastName: 'May', email: 'Jeremy.May@gmail.com', status: 0 }
    ]
};

function searchUser(user, { field, query }) {
    const isStatus = field === 'status';
    const actionQuery = query.toLowerCase();
    let isShow;

    if (isStatus) {
        const isActive = user.status && 'active'.includes(actionQuery);
        const isInactive = user.status === 0 && 'inactive'.includes(actionQuery);

        isShow = isActive || isInactive;
    } else {
        isShow = user[field].toLowerCase().includes(actionQuery)
    }

    user.visibility = isShow;

    return user;
}

function sortUser(state, { field }) {
    let sortType = 'asc';

    if (state.sort && state.sort.field === field) {
        sortType = state.sort.type === 'asc' ? 'desc' : 'asc';
    }

    const sort = {
        field: field,
        type: sortType
    };

    return {
        ...state,
        sort,
        data: state.data.sort((a, b) => {
            const sortType = sort.type === 'desc' ? a[field] > b[field] : a[field] < b[field];
            return sortType ? -1 : 1
        })
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CLEAR_SEARCH_FILTER:
            return {
                ...state,
                data: state.data.map(user => {
                    user.visibility = true;
                    return user;
                })
            };

        case LOCATION_CHANGE:
            // TODO: it's temporal solution, it should be changed
            return { ...state, activePage: Number(action.payload.query.page) || 1 };

        case types.DELETE_USER:
            return { ...state, data: state.data.filter(user => user.id !== action.id) };

        case types.CHANGE_PAGE:
            return { ...state, activePage: action.page };

        case types.SEARCH_USER:
            return { ...state, data: state.data.map(user => searchUser(user, action)) };

        case types.SORT_USER:
            return sortUser(state, action);

        default:
            return state
    }
}
