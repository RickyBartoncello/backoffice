import {
    call,
    put
} from 'redux-saga/effects';

import InstrumentAPI from '../Api/instrument';
import {
    fetchInstrumentsSucceeded
} from '../actions/instrument';

export function* fetchInstruments({filter}) {
    try {
        const instruments = yield call(
            InstrumentAPI.fetch,
            filter
        );
        yield put(
            fetchInstrumentsSucceeded(instruments)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}