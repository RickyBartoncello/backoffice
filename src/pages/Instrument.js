import React, {PureComponent} from 'react';
import DynamicTable from '../components/DynamicTable';
import {connect} from 'react-redux';

import {fetchInstrumentsRequested} from '../actions/instrument';

import keys from 'lodash/keys';
import head from 'lodash/head';

class App extends PureComponent {
    componentDidMount() {
        this.props.getInstruments();
    }

    render() {
        const {instruments} = this.props;
        return (
            <div>
                <DynamicTable {...{entities: instruments, entityProps: keys(head(instruments)), label:'Instrumentos'}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {instruments, loading} = state.instrument;
    return {
        instruments,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getInstruments: () => dispatch(fetchInstrumentsRequested())
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
