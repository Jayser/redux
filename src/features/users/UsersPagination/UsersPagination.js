import React, { Component, PropTypes} from 'react';
import { Pagination } from 'react-bootstrap';

export default class UsersPagination extends Component {
    static propTypes = {
        activePage: PropTypes.number.isRequired,
        perPage: PropTypes.number,
        items: PropTypes.number.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    static defaultProps = {
        perPage: 5
    };

    render() {
        const {
            activePage,
            items,
            perPage,
            onSelect
        } = this.props;

        const itemsPerPage = Math.ceil(items / perPage);

        return (
            <section className="text-center">
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={ itemsPerPage }
                    activePage={ activePage }
                    onSelect={ page => onSelect({ page }) } />
            </section>
        )
    }
}