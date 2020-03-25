import {
    FETCH_QUOTES_SUCCEEDED,
    FETCH_QUOTES_REQUESTED,
    SORT_QUOTE
} from '../../actions/quote';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    quotes: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUOTES_REQUESTED:
            return {...state, loading: true};
        case FETCH_QUOTES_SUCCEEDED:
            const {quotes, limit, total} = action;
            return {...state, loading: false, quotes, limit, total};
        case SORT_QUOTE:
            return {
                ...state,
                loading: false,
                quotes: orderBy(state.quotes,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}