import {
    call,
    put
} from 'redux-saga/effects';

import CarAPI from '../Api/car';
import {
    fetchCarsSucceeded
} from '../actions/car';

export function* fetchCars({filter}) {
    try {
        const cars = yield call(
            CarAPI.fetch,
            filter
        );
        yield put(
            fetchCarsSucceeded(cars)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}