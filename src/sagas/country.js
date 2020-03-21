import {
    call,
    put
} from 'redux-saga/effects';

import CountryAPI from '../Api/country';
import {
    fetchCountriesSucceeded
} from '../actions/country';

export function* fetchCountries({filter}) {
    try {
        const countries = yield call(
            CountryAPI.fetch,
            filter
        );
        yield put(
            fetchCountriesSucceeded(countries)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}