import constant from 'lodash/constant';

export const FETCH_MOVIES_REQUESTED = 'FETCH_MOVIES_REQUESTED'; // Accion | Action
export const FETCH_MOVIES_SUCCEEDED = 'FETCH_MOVIES_SUCCEEDED'; // Accion | Action

export const SORT_MOVIE = 'SORT_MOVIE';

export const SUBMIT_MOVIE_DATA_REQUESTED = 'SUBMIT_MOVIE_DATA_REQUESTED';
export const SUBMIT_MOVIE_DATA_SUCCEEDED = 'SUBMIT_MOVIE_DATA_SUCCEEDED';

export const UPDATE_MOVIE_DATA = 'UPDATE_MOVIE_DATA';

export const FETCH_MOVIE_REQUESTED = 'FETCH_MOVIE_REQUESTED'; // Accion | Action
export const FETCH_MOVIE_SUCCEEDED = 'FETCH_MOVIE_SUCCEEDED'; // Accion | Action

export const sortMovie = sort => ({type: SORT_MOVIE, sort});

export const fetchMoviesRequested = filter =>({type: FETCH_MOVIES_REQUESTED, filter})// Disparador o Action Creator
export const fetchMoviesSucceeded = (movies, limit, total) => ({
    type: FETCH_MOVIES_SUCCEEDED,
    movies, limit, total
}) // Disparador o Action Creator

export const submitMovieDataRequested = constant({type: SUBMIT_MOVIE_DATA_REQUESTED});
export const submitMovieDataSucceeded = constant({type: SUBMIT_MOVIE_DATA_SUCCEEDED});

export const updateMovieData = movie => ({type: UPDATE_MOVIE_DATA, movie});


export const fetchMovieRequested = id => ({type: FETCH_MOVIE_REQUESTED, id}) // Disparador o Action Creator
export const fetchMovieSucceeded = movie => ({
    type: FETCH_MOVIE_SUCCEEDED,
    movie
}) // Disparador o Action Creator

export const DELETE_MOVIE_REQUESTED = 'DELETE_MOVIE_REQUESTED';
export const DELETE_MOVIE_SUCCEEDED = 'DELETE_MOVIE_SUCCEEDED';

export const deleteMovieRequested = id => ({type: DELETE_MOVIE_REQUESTED, id});
export const deleteMovieSucceeded = constant({type: DELETE_MOVIE_SUCCEEDED});
