import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as UserActions from '../actions';

import UsersList from '../UsersList';
import UsersFilter from '../UsersFilter';
import UsersPagination from '../UsersPagination';

// TODO: Should be change to "CSS module" way
import './UsersView.scss';

const USERS_PER_PAGE = 5;

class UsersView extends Component {
    static propTypes = {
        users: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    componentWillMount() {
        this.changeRouteState(browserHistory.getCurrentLocation().query);
    }

    @autobind changeRouteState({ page, sort, search }) {
        /*
         * TODO: Should be change current implementation to:
         * page=1&sortByField=lastName&sortType=alphabet&searchByField&searchQuery=query
         *
         * I think it's more useful
         */
        const path = browserHistory.getCurrentLocation();

        if (page) {
            path.query.page = page;
            this.props.actions.userPage(Number(page));
        }

        if (sort) {
            path.query.sort = sort;
            this.props.actions.sortUser(sort);
        }

        if (search && search.query) {
            path.query[search.field] = search.query;
            this.props.actions.searchUser(search.field, search.query);
        }

        if (search && search.field && !search.query) {
            path.query = {
                page: path.query.page,
                sort: path.query.sort,
            };
            this.props.actions.clearSearchFilter();
        }

        browserHistory.push(path);
    }

    @autobind handleFilterSearch(field, query) {
        this.changeRouteState({ search: { field, query } });
    }

    @autobind handleFilterClear(field) {
        this.changeRouteState({ search: { field } });
    }

    render() {
        const {
            users: {
                activePage,
                data,
                count,
                sort,
            },
            actions: {
                deleteUser
            }
        } = this.props;

        return (
            <section>
                <UsersFilter
                    handleSearch={ this.handleFilterSearch }
                    handleClear={ this.handleFilterClear } />
                <UsersList
                    className="users-list"
                    users={ data }
                    sort={ sort }
                    changeRouteState={ this.changeRouteState }
                    deleteUser={ deleteUser } />
                <UsersPagination
                    activePage={ activePage }
                    items={ count }
                    onSelect={ this.changeRouteState } />
            </section>
        )
    }
}

const mapStateToProps = ({ users }) => {
    const from = (users.activePage - 1) * USERS_PER_PAGE;
    const to = from + USERS_PER_PAGE;
    const visibilityUsers = users.data.filter(({ visibility }) => (
        visibility === true || visibility === undefined
    ));

    return {
        users: {
            ...users,
            data: visibilityUsers.slice(from, to),
            count: visibilityUsers.length
        }
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersView);
