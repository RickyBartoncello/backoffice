import {
    call,
    put
} from 'redux-saga/effects';

import CountryAPI from '../services/country';
import {
    fetchCountriesSucceeded
} from '../actions/country';

export function* fetchCountries() {
    try {
        const countries = yield call(
            CountryAPI.fetch
        );
        yield put(
            fetchCountriesSucceeded(countries)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}