import {
    call,
    put
} from 'redux-saga/effects';

import QuoteAPI from '../Api/quote';
import {
    fetchQuotesSucceeded
} from '../actions/quote';

export function* fetchQuotes({filter}) {
    try {
        const quotes = yield call(
            QuoteAPI.fetch,
            filter
        );
        yield put(
            fetchQuotesSucceeded(quotes)
        );
    } catch (err) {
        alert(JSON.stringify(err));
    }
}