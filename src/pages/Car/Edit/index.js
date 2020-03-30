import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchCarRequested,
    submitCarDataRequested,
    updateCarData
} from '../../../actions/car';

import Component from './Component';

const fields = [
    {
        control: 'brand',
        label: 'Marca',
        path: 'brand',
        value: null,
        type: 'text'
    },
    {
        control: 'model',
        label: 'Modelo',
        path: 'model',
        value: null,
        type: 'text'
    },
    {
        control: 'Year',
        label: 'Ano',
        path: 'Year',
        value: null,
        type: 'number'
    }
];

const mapStateToProps = state => {
    const car = get(state, 'cars.car', {});
    const cFields = map(fields, field => ({
        ...field,
        value: get(car, field.path, '')
    }));
    return {
        car,
        fields: cFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchCar: id => dispatch(fetchCarRequested(id)),
    submitCarData: () => dispatch(submitCarDataRequested()),
    updateCar: car => dispatch(updateCarData(car))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateCar} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateCar(set(stateProps.car, field.path, value))
    }));
    return {
        ...dispatchProps,
        ...ownProps,
        fields: mergeFields
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Component);
