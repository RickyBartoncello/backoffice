import {connect} from 'react-redux';
import Component from './Component';

import {fetchCarsRequested, sortCar} from '../../../actions/car';

const mapStateToProps = state => ({
    cars: state.car.documents.cars,
    total: state.car.documents.total,
    loading: state.car.documents.loading,
    tableProps: state.car.tableProps,
    limit: state.car.documents.limit
})

const mapDispatchToProps = dispatch => ({
    fetchCars: () => dispatch(fetchCarsRequested()),
    onSort: sort => dispatch(sortCar(sort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
