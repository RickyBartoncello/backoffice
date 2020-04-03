import React, {PureComponent} from 'react';
import {
    Button,
    Col,
    Container,
    Row,
    Spinner
} from 'reactstrap';

import {Link} from 'react-router-dom';

import Table from '../../../components/table';

class CarTable extends PureComponent {
    componentDidMount() {
        this.props.fetchCars();
    }

    handlePagination = a => console.log(a)
    render() {
        const {
            cars,
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
                            to="/cars/edit/new"
                        >
                            Nuevo
                        </Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        {loading && (
                            <Spinner color="danger" />
                        )}
                        {!loading && (
                            <Table bordered condensed hover stripped size="sm"{...{
                                data: cars,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                linkTo: "cars"
                            }}/>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CarTable;
