import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchCountryRequested,
    submitCountryDataRequested,
    updateCountryData
} from '../../../actions/country';

import Component from './Component';

const fields = [
    {
        control: 'name',
        label: 'Nombre',
        path: 'name',
        value: null,
        type: 'text'
    },
    {
        control: 'code',
        label: 'Codigo',
        path: 'code',
        value: null,
        type: 'text'
    },
    {
        control: 'year',
        label: 'Ano',
        path: 'year',
        value: null,
        type: 'number'
    }
];

const mapStateToProps = state => {
    const country = get(state, 'country.documents.country', {});
    const cFields = map(fields, field => ({
        ...field,
        value: get(country, field.path, '')
    }));
    return {
        country,
        fields: cFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchCountry: id => dispatch(fetchCountryRequested(id)),
    submitCountryData: country => dispatch(submitCountryDataRequested(country)),
    updateCountry: country => dispatch(updateCountryData(country))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateCountry} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateCountry(set(stateProps.country, field.path, value))
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