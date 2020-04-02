import React, { PureComponent } from 'react';
import {
    Button,
    Col,
    Container,
    Row,
    Spinner
} from 'reactstrap';

import { Link } from 'react-router-dom';

import Table from '../../../components/table';

class InstrumentTable extends PureComponent {
    componentDidMount() {
        this.props.fetchInstruments();
    }

    handlePagination = a => console.log(a)
    render() {
        const {
            instruments,
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
                    <Col>
                        <Button
                            className="float-right"
                            color="primary"
                            size="lg"
                            tag={Link}
                            to="/instruments/Edit/new"
                        >
                            Nuevo
                        </Button>
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
                                data: instruments,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                linkTo: "instruments"
                            }} />
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InstrumentTable;

