import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED, FETCH_COUNTRY_REQUESTED, SUBMIT_COUNTRY_DATA_REQUESTED,DELETE_COUNTRY_REQUESTED} from '../actions/country';
import {FETCH_CARS_REQUESTED, FETCH_CAR_REQUESTED, SUBMIT_CAR_DATA_REQUESTED,DELETE_CAR_REQUESTED} from '../actions/car';
import {FETCH_INSTRUMENTS_REQUESTED, FETCH_INSTRUMENT_REQUESTED, SUBMIT_INSTRUMENT_DATA_REQUESTED,DELETE_INSTRUMENT_REQUESTED} from '../actions/instrument';
import {FETCH_MOVIES_REQUESTED, FETCH_MOVIE_REQUESTED, SUBMIT_MOVIE_DATA_REQUESTED,DELETE_MOVIE_REQUESTED} from '../actions/movie';

import {fetchCountries, getCountry, saveCountry, deleteCountry} from './country';
import {fetchCars, getCar, saveCar, deleteCar} from './car';
import{fetchInstruments, getInstrument, saveInstrument, deleteInstrument} from "./instrument";
import{fetchMovies, getMovie, saveMovie, deleteMovie} from "./movie";


export default function* root() {
    return yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_COUNTRY_REQUESTED, getCountry),
        takeEvery(SUBMIT_COUNTRY_DATA_REQUESTED, saveCountry),
        takeEvery(DELETE_COUNTRY_REQUESTED, deleteCountry),
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_CAR_REQUESTED, getCar),
        takeEvery(SUBMIT_CAR_DATA_REQUESTED, saveCar),
        takeEvery(DELETE_CAR_REQUESTED, deleteCar),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(FETCH_INSTRUMENT_REQUESTED, getInstrument),
        takeEvery(SUBMIT_INSTRUMENT_DATA_REQUESTED, saveInstrument),
        takeEvery(DELETE_INSTRUMENT_REQUESTED, deleteInstrument),
        takeEvery(FETCH_MOVIES_REQUESTED, fetchMovies),
        takeEvery(FETCH_MOVIE_REQUESTED, getMovie),
        takeEvery(SUBMIT_MOVIE_DATA_REQUESTED, saveMovie),
        takeEvery(DELETE_MOVIE_REQUESTED, deleteMovie)
    ])
}
