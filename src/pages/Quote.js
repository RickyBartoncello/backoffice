import React, {PureComponent} from 'react';
import DynamicTable from '../components/DynamicTable';
import {connect} from 'react-redux';

import {fetchQuotesRequested} from '../actions/quote';

import keys from 'lodash/keys';
import head from 'lodash/head';

class App extends PureComponent {
    componentDidMount() {
        this.props.getQuotes();
    }

    render() {
        const {quotes} = this.props;
        return (
            <div>
                <DynamicTable {...{entities: quotes, entityProps: keys(head(quotes)), label:'Frases'}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {quotes, loading} = state.quote;
    return {
        quotes,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getQuotes: () => dispatch(fetchQuotesRequested())
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
