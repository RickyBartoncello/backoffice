import {
    call,
    put
} from 'redux-saga/effects';

import InstrumentAPI from '../services/instrument';
import {
    fetchInstrumentsSucceeded
} from '../actions/instrument';

export function* fetchInstruments() {
    try {
        const instruments = yield call(
            InstrumentAPI.fetch
        );
        yield put(
            fetchInstrumentsSucceeded(instruments)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}