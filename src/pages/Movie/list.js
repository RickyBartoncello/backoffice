import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Container,
    Button,
    Row,
    Col,
    Spinner
} from 'reactstrap';

import {
    fetchCarsRequested,
    sortCar,
    submitCarDataRequested,
    deleteCarRequested
} from '../../actions/car'

class App extends PureComponent {
    componentDidMount() {
        this.props.getCars();
    }

    handlePagination = (skip) => {
        this.props.getCars({skip});
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
                        <h3>Tabla de datos </h3>
                    </Col>
                    <Col sm="3">
                        <Button  
                        className="float-right"
                        color="primary"
                        size="lg"
                        tag={Link} 
                        to="/cars/edit/new"> Nuevo </Button>
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
                                linkTo:'cars'
                            }}/>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {cars, limit, total, loading}, tableProps} = state.car;
    return {
        tableProps,
        cars,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCars: filters => dispatch(fetchCarsRequested(filters)),
    onSort: sort => dispatch(sortCar(sort)),
    submitCarData: () => dispatch(submitCarDataRequested()),
    deleteCar: id => dispatch(deleteCarRequested(id))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
