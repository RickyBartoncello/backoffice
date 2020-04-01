import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchInstrumentRequested,
    submitInstrumentDataRequested,
    updateInstrumentData
} from '../../../actions/instrument';

import Component from './Component';

const fields = [
    {
        control: 'family',
        label: 'Familia',
        path: 'family',
        value: null,
        type: 'text'
    },
    {
        control: 'instrument',
        label: 'Instrumento',
        path: 'instrument',
        value: null,
        type: 'text'
    },
];

const mapStateToProps = state => {
    const instrument = get(state, 'instrument.documents.instrument', {});
    const cFields = map(fields, field => ({
        ...field,
        value: get(instrument, field.path, '')
    }));
    return {
        instrument,
        fields: cFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchInstrument: id => dispatch(fetchInstrumentRequested(id)),
    submitInstrumentData: instrument => dispatch(submitInstrumentDataRequested(instrument)),
    updateInstrument: instrument => dispatch(updateInstrumentData(instrument))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateInstrument} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateInstrument(set(stateProps.instrument, field.path, value))
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
