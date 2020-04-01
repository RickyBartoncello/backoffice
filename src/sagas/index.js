import { all, takeEvery } from 'redux-saga/effects';

import {FETCH_CARS_REQUESTED, SUBMIT_CAR_DATA_REQUESTED, FETCH_CAR_REQUESTED} from '../actions/car';
import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';
import {FETCH_INSTRUMENTS_REQUESTED} from '../actions/instrument';
import {FETCH_MOVIES_REQUESTED, SUBMIT_MOVIE_DATA_REQUESTED, FETCH_MOVIE_REQUESTED } from '../actions/movie';

import {fetchCars, submitCarData, fetchCar } from './car';
import {fetchCountries} from './country';
import {fetchInstruments} from './instrument';
import {fetchMovies, submitMovieData, fetchMovie} from './movie';

export default function* root() {
    return yield all([
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_CAR_REQUESTED, fetchCar),
        takeEvery(SUBMIT_CAR_DATA_REQUESTED, submitCarData),
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(FETCH_MOVIES_REQUESTED, fetchMovies),
        takeEvery(FETCH_MOVIE_REQUESTED, fetchMovie),
        takeEvery(SUBMIT_MOVIE_DATA_REQUESTED, submitMovieData),

    ])
}
