import { call, put, delay, select } from 'redux-saga/effects';

import CountryAPI from '../Api/country';
import {fetchCountriesSucceeded, submitCountryDataSucceeded, fetchCountrySucceeded} from '../actions/country';

export function* fetchCountries({ filter }) {
    try {
        const { countries, limit, total } = yield call(CountryAPI.fetch, filter);
        yield delay(1500);
        yield put(
            fetchCountriesSucceeded(countries, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}

export function* fetchCountry({id}) {
    const country = yield call(CountryAPI.fetchCountry, id);
    yield put(
        fetchCountrySucceeded(country)
    );
}

export function* submitCountryData() {
    const country = yield select(state => state.country.documents.country);
    const result = yield call(CountryAPI.submitCountry, country);
    if (result.success) {
        yield put(
            submitCountryDataSucceeded()
        );
    }
}