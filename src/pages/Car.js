import React, {PureComponent} from 'react';
import DynamicTable from '../components/DynamicTable';
import {connect} from 'react-redux';

import {fetchCarsRequested} from '../actions/car';

import keys from 'lodash/keys';
import head from 'lodash/head';

class App extends PureComponent {
    componentDidMount() {
        this.props.getCars();
    }

    render() {
        const {cars} = this.props;
        return (
            <div>
                <DynamicTable {...{entities: cars, entityProps: keys(head(cars)), label:'Autos'}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {cars, loading} = state.car;
    return {
        cars,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCars: () => dispatch(fetchCarsRequested())
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
