import React, {PureComponent} from 'react';
import DynamicTable from '../components/DynamicTable';
import {connect} from 'react-redux';

import {fetchCountriesRequested} from '../actions/country';

import keys from 'lodash/keys';
import head from 'lodash/head';

class App extends PureComponent {
    componentDidMount() {
        this.props.getCountries();
    }

    render() {
        const {countries} = this.props;
        return (
            <div>
                <DynamicTable {...{entities: countries, entityProps: keys(head(countries)), label:'Paises'}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {countries, loading} = state.country;
    return {
        countries,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCountries: () => dispatch(fetchCountriesRequested())
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
