import React, { PureComponent } from 'react';
import {
    Col,
    Container,
    Row,
    Spinner
} from 'reactstrap';

import Table from '../../../components/table';

class CountryTable extends PureComponent {
    componentDidMount() {
        this.props.fetchCountries();
    }

    handlePagination = a => console.log(a)
    render() {
        const {
            countries,
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
                        <h3>Tabla de datos </h3>
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
                                data: countries,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                linkTo: "country"
                            }} />
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CountryTable;
