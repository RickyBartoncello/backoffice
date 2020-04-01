import { call, put, delay, select } from 'redux-saga/effects';

import MovieAPI from '../Api/movie';
import {fetchMoviesSucceeded, submitMovieDataSucceeded, fetchMovieSucceeded} from '../actions/movie';

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

export function* fetchMovie({id}) {
    const movie = yield call(MovieAPI.fetchMovie, id);
    yield put(
        fetchMovieSucceeded(movie)
    );
}

export function* submitMovieData() {
    const movie = yield select(state => state.movie.documents.movie);
    const result = yield call(MovieAPI.submitMovie, movie);
    if (result.success) {
        yield put(
            submitMovieDataSucceeded()
        );
    }
}
