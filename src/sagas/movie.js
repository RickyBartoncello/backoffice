import { call, put, delay, select } from 'redux-saga/effects';

import MovieAPI from '../Api/movie';
import {fetchMoviesSucceeded, submitMovieDataSucceeded, fetchMovieSucceeded, deleteMovieSucceeded} from '../actions/movie';

export function* fetchMovies({ filter }) {
    try {
        const { movies, limit, total } = yield call(MovieAPI.fetch, filter);
        yield delay(1500);
        yield put(
            fetchMoviesSucceeded(movies, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* getMovie({id}) {
    try {
        const {movie} = yield call(
            MovieAPI.getOne,
            id
        );
        yield delay(500);
        yield put(
            fetchMovieSucceeded(movie)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* saveMovie() {
    try {
        const {movie} = yield select(state => state.movie.documents)
        const status = yield call(
            MovieAPI.save,
            movie // Si tiene id es un put, Si no tiene caso nuevo es post
        );
        yield delay(500);
        yield put(
            submitMovieDataSucceeded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}
export function* deleteMovie({id}) {
    try {
        const status = yield call(
            MovieAPI.delete,
            id
        );
        /**
         * @todo
         * check why this is failing. filter should be inside reducers so we can re take it on a call
         */
        yield delay(500);
        yield put(
            deleteMovieSucceeded(status)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}
