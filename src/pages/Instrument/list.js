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
    fetchInstrumentsRequested,
    sortInstrument,
    submitInstrumentDataRequested
} from '../../actions/instrument'

class App extends PureComponent {
    componentDidMount() {
        this.props.getInstruments();
    }

    handlePagination = (skip) => {
        this.props.getInstruments({skip});
    } 

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
                    <Col sm="3">
                        <Button  
                        className="float-right"
                        color="primary"
                        size="lg"
                        tag={Link} 
                        to="/instruments/edit/new"> Nuevo </Button>
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
                                data: instruments,
                                ...tableProps,
                                onSort,
                                limit,
                                total,
                                onPageClick: this.handlePagination,
                                linkTo:'instruments'
                            }}/>
                        )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {instruments, limit, total, loading}, tableProps} = state.instrument;
    return {
        tableProps,
        instruments,
        limit,
        total,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getInstruments: filters => dispatch(fetchInstrumentsRequested(filters)),
    onSort: sort => dispatch(sortInstrument(sort)),
    submitInstrumentData: () => dispatch(submitInstrumentDataRequested())
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
