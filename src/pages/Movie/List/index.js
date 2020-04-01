import {connect} from 'react-redux';
import Component from './Component';

import {fetchMoviesRequested, sortMovie} from '../../../actions/movie';

const mapStateToProps = state => ({
    movies: state.movie.documents.movies,
    total: state.movie.documents.total,
    loading: state.movie.documents.loading,
    tableProps: state.movie.tableProps,
    limit: state.movie.documents.limit
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMoviesRequested()),
    onSort: sort => dispatch(sortMovie(sort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
