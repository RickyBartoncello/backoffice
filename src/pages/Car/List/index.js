import {connect} from 'react-redux';

import {fetchCarsRequested} from '../../../actions/car';

import Component from './Component';

const mapDispatchToProps = dispatch => ({
    fetchCars: () => dispatch(fetchCarsRequested())
});

export default connect(
    mapDispatchToProps
)(Component);
