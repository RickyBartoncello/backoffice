import React, {PureComponent} from 'react';
import Table from '../../components/table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    fetchQuotesRequested,
    sortQuote
} from '../../actions/quote'

class App extends PureComponent {
    componentDidMount() {
        this.props.getQuetes();
    }

    render() {
        const {quotes, tableProps, onSort} = this.props;
        return (
            <div>
                <h3>Tabla de datos </h3>
                <Link to="/quote/edit/new"> Nuevo </Link>
                <hr/>
                <Table {...{data: quotes, ...tableProps, onSort: onSort}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {quotes, loading}, tableProps} = state.quote;
    return {
        tableProps,
        quotes,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getQuetes: () => dispatch(fetchQuotesRequested()),
    onSort: sort => dispatch(sortQuote(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);