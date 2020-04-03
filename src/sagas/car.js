import { call, put, delay, select } from 'redux-saga/effects';

import CarAPI from '../Api/car';
import {fetchCarsSucceeded, submitCarDataSucceeded, fetchCarSucceeded, deleteCarSucceeded} from '../actions/car';

export function* fetchCars({ filter }) {
    try {
        const { cars, limit, total } = yield call(CarAPI.fetch, filter);
        yield delay(1500);
        yield put(
            fetchCarsSucceeded(cars, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* fetchCar({id}) {
    const car = yield call(CarAPI.fetchCar, id);
    yield put(
        fetchCarSucceeded(car)
    );
}

export function* submitCarData() {
    const car = yield select(state => state.car.documents.car);
    const result = yield call(CarAPI.submitCar, car);
    if (result.success) {
        yield put(
            submitCarDataSucceeded()
        );
    }
}

export function* deleteCar({id}) {
    const success = yield call(CarAPI.deleteCar, id);
    yield put(
        deleteCarSucceeded(success)
    );
}