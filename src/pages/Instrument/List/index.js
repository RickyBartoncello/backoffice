import {connect} from 'react-redux';
import Component from './Component';

import {fetchInstrumentsRequested, sortInstrument} from '../../../actions/instrument';

const mapStateToProps = state => ({
    instruments: state.instrument.documents.instruments,
    total: state.instrument.documents.total,
    loading: state.instrument.documents.loading,
    tableProps: state.instrument.tableProps,
    limit: state.instrument.documents.limit
})

const mapDispatchToProps = dispatch => ({
    fetchInstruments: () => dispatch(fetchInstrumentsRequested()),
    onSort: sort => dispatch(sortInstrument(sort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

