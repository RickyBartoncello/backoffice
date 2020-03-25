import {
    call,
    put,
    delay
} from 'redux-saga/effects';

import QuoteAPI from '../Api/quote';
import {
    fetchQuotesSucceeded
} from '../actions/quote';

export function* fetchQuotes({filter}) {
    try {
        const {quotes, limit, total} = yield call(
            QuoteAPI.fetch,
            filter
        );
        yield delay(1500);
        yield put(
            fetchQuotesSucceeded(quotes, limit, total)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}