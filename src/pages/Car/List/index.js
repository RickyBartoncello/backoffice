import {connect} from 'react-redux';
<<<<<<< HEAD
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
=======

import {fetchCarsRequested} from '../../../actions/car';

import Component from './Component';

const mapDispatchToProps = dispatch => ({
    fetchCars: () => dispatch(fetchCarsRequested())
});

export default connect(
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
    mapDispatchToProps
)(Component);
