import {
    call,
    put
} from 'redux-saga/effects';

import QuoteAPI from '../services/quote';
import {
    fetchQuotesSucceeded
} from '../actions/quote';

export function* fetchQuotes() {
    try {
        const quotes = yield call(
            QuoteAPI.fetch
        );
        yield put(
            fetchQuotesSucceeded(quotes)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}