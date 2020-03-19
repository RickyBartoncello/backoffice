import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_CARS_REQUESTED} from '../actions/car';
import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';
import {FETCH_INSTRUMENTS_REQUESTED} from '../actions/instrument';
import {FETCH_QUOTES_REQUESTED} from '../actions/quote';

import {fetchCars} from './car';
import {fetchCountries} from './country';
import {fetchInstruments} from './instrument';
import {fetchQuotes} from './quote';

export default function* root() {
    return yield all([
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(FETCH_QUOTES_REQUESTED, fetchQuotes)
    ])
}
