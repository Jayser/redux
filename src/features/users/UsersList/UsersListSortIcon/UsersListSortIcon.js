import React, { Component, PropTypes } from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class UsersListSortIcon extends Component {
    static propTypes = {
        sort: PropTypes.object,
        name: PropTypes.string
    };

    renderIcon() {
        const { sort, name } = this.props;
        if (sort && sort.field === name) {
            return sort.type === 'asc' ? <Glyphicon glyph='sort-by-alphabet' /> : <Glyphicon glyph='sort-by-alphabet-alt' />
        }

        return null;
    }

    render() {
        const icon = this.renderIcon();

        return (
            <span>
                { icon }
                { this.props.children }
            </span>
        );
    }
}