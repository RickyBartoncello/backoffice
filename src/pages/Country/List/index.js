import {connect} from 'react-redux';
import Component from './Component';

import {fetchCountriesRequested, sortCountry} from '../../../actions/country';

const mapStateToProps = state => ({
    countries: state.country.documents.countries,
    total: state.country.documents.total,
    loading: state.country.documents.loading,
    tableProps: state.country.tableProps,
    limit: state.country.documents.limit
})

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => dispatch(fetchCountriesRequested()),
    onSort: sort => dispatch(sortCountry(sort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
