import React, {PureComponent} from 'react';
import {
    Table,
    Button,
    Col,
    Container,
    Row,
    Spinner
} from 'reactstrap';

import {Link} from 'react-router-dom';

class CarTable extends PureComponent {
    componentDidMount() {
        this.props.fetchCar();
    }

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
                        <Button
                            className="float-right"
                            color="primary"
                            size="lg"
                            tag={Link}
                            to="/cars/new"
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
                            <Table {...{
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
                <hr/>
                <Row>
                    <Col>
                        <Table bordered condensed hover stripped size="sm">
                            <thead>
                                <tr>
                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Ano</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.map(cars => (
                                    <tr>
                                        <td>{cars.brand}</td>
                                        <td>{cars.model}</td>
                                        <td>{cars.year}</td>\
                                        <td>
                                            <Link to={`/cars/${cars.id}`}>Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CarTable;
