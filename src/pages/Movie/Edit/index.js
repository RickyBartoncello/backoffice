import {connect} from 'react-redux';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';

import {
    fetchMovieRequested,
    submitMovieDataRequested,
    updateMovieData
} from '../../../actions/movie';

import Component from './Component';

const fields = [
    {
        control: 'title',
        label: 'Titulo',
        path: 'title',
        value: null,
        type: 'text'
    },
    {
        control: 'genres',
        label: 'Genero',
        path: 'genres',
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
    const movie = get(state, 'movie.documents.movie', {});
    const cFields = map(fields, field => ({
        ...field,
        value: get(movie, field.path, '')
    }));
    return {
        movie,
        fields: cFields
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMovie: id => dispatch(fetchMovieRequested(id)),
    submitMovieData: movie => dispatch(submitMovieDataRequested(movie)),
    updateMovie: movie => dispatch(updateMovieData(movie))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {updateMovie} = dispatchProps;
    const mergeFields = map(stateProps.fields, field => ({
        ...field,
        onChange: ({target: {value}}) => updateMovie(set(stateProps.movie, field.path, value))
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
