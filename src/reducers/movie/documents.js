import {
    FETCH_MOVIES_REQUESTED,
    FETCH_MOVIES_SUCCEEDED,
    SORT_MOVIE,
    SUBMIT_MOVIE_DATA_SUCCEEDED,
    FETCH_MOVIE_SUCCEEDED,
    UPDATE_MOVIE_DATA,
    DELETE_MOVIE_REQUESTED,
    DELETE_MOVIE_SUCCEEDED
} from '../../actions/movie';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    movies: [],
    movie: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUESTED:
            return { ...state, loading: true };
        case FETCH_MOVIES_SUCCEEDED:
            const { movies, limit, total } = action;
            return { ...state, loading: false, movies, limit, total };
        case SORT_MOVIE:
            return {
                ...state,
                loading: false,
                movies: orderBy(state.movies,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        case SUBMIT_MOVIE_DATA_SUCCEEDED:
            return { ...state, success: true, movie: {} };
        case FETCH_MOVIE_SUCCEEDED:
            return { ...state, movie: action.movie };
        case UPDATE_MOVIE_DATA:
            return { ...state, movie: action.movie };
        case DELETE_MOVIE_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case DELETE_MOVIE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                movie: action.movie
            };
        default:
            return state;
    }
}
