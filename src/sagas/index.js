import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';
import {FETCH_CARS_REQUESTED, FETCH_CAR_REQUESTED, SUBMIT_CAR_DATA_REQUESTED,DELETE_CAR_REQUESTED} from '../actions/car';

import {fetchCountries} from './country';
import {fetchCars, getCar, saveCar, deleteCar} from './car';


export default function* root() {
    return yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
        takeEvery(FETCH_CAR_REQUESTED, getCar),
        takeEvery(SUBMIT_CAR_DATA_REQUESTED, saveCar),
        takeEvery(DELETE_CAR_REQUESTED, deleteCar)
    ])
}
