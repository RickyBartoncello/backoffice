<<<<<<< HEAD
import { call, put, delay, select } from 'redux-saga/effects';

import CarAPI from '../Api/car';
import {fetchCarsSucceeded, submitCarDataSucceeded, fetchCarSucceeded} from '../actions/car';
=======
import { call, put, delay } from 'redux-saga/effects';

import CarAPI from '../Api/car';
import {fetchCarsSucceeded, submitCarDataSucceded, updateCarData} from '../actions/car';
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648

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
<<<<<<< HEAD

export function* fetchCar({id}) {
    const car = yield call(CarAPI.fetchCar, id);
    yield put(
        fetchCarSucceeded(car)
    );
}

export function* submitCarData() {
    const car = yield select(state => state.cars.car);
    console.log(car);
    const result = yield call(CarAPI.submitCar, car);
    if (result.success) {
        yield put(
            submitCarDataSucceeded()
        );
    }
}
=======
/*export function* fetchCar({id}) {
    const car = yield call(CarAPI.fetchCar, id);
    yield put(
        updateCarData(car)
    );
}
export function* submitCarData() {
    const car = yield select(state => state.cars.car);
    const result = yield call(CarAPI.submitCar, car);
    if (result.success) {
        yield put(
            submitCarDataSucceded()
        );
    }
}*/
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
