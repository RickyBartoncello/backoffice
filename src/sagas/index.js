import { all, takeEvery } from 'redux-saga/effects';

<<<<<<< HEAD
import {FETCH_CARS_REQUESTED, SUBMIT_CAR_DATA_REQUESTED, FETCH_CAR_REQUESTED} from '../actions/car';
=======
import {FETCH_CARS_REQUESTED, SUBMIT_CAR_DATA_REQUESTED} from '../actions/car';
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';
import {FETCH_INSTRUMENTS_REQUESTED} from '../actions/instrument';
import {FETCH_QUOTES_REQUESTED} from '../actions/quote';

<<<<<<< HEAD
import {fetchCars, submitCarData, fetchCar } from './car';
=======
import {fetchCars, /*submitCarData*/ } from './car';
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
import {fetchCountries} from './country';
import {fetchInstruments} from './instrument';
import {fetchQuotes} from './quote';

export default function* root() {
    return yield all([
        takeEvery(FETCH_CARS_REQUESTED, fetchCars),
<<<<<<< HEAD
        takeEvery(FETCH_CAR_REQUESTED, fetchCar),
        takeEvery(SUBMIT_CAR_DATA_REQUESTED, submitCarData),
=======
        /*takeEvery(SUBMIT_CAR_DATA_REQUESTED, submitCarData),*/
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetchCountries),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED, fetchInstruments),
        takeEvery(FETCH_QUOTES_REQUESTED, fetchQuotes)
    ])
}
