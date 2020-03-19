import {
    call,
    put
} from 'redux-saga/effects';

import CarAPI from '../services/car';
import {
    fetchCarsSucceeded
} from '../actions/car';

export function* fetchCars() {
    try {
        const cars = yield call(
            CarAPI.fetch
        );
        yield put(
            fetchCarsSucceeded(cars)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}