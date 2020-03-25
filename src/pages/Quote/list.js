import React, { PureComponent } from 'react';
import Table from '../../components/table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Spinner
} from 'reactstrap';

import {
    fetchQuotesRequested,
    sortQuote
} from '../../actions/quote'

class App extends PureComponent {
    componentDidMount() {
        this.props.getQuetes();
    }

    handlePagination = (skip) => {
        this.props.getQuetes({ skip });
    }

    render() {
        const {
            quotes,
            limit,
            total,
            tableProps,
            onSort,
            loading
        } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <h3> Tabla de datos</h3>
                    </Col>
                    <Col sm="3">
                        <Button color="primary" tag={Link} to="/quote/edit/new">Nuevo</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        {loading && (
                            <Spinner color="danger" />
                        )}
                        {!loading && (
                            <Table {...{
                                data: quotes,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination
                            }} />
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */) => {
    const { documents: { quotes, limit, total, loading }, tableProps } = state.country;
    return {
        tableProps,
        quotes,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */) => ({
    getQuetes: () => dispatch(fetchQuotesRequested()),
    onSort: sort => dispatch(sortQuote(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);