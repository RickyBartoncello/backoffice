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
            return {...state, loading: false, quotes: action.quotes};
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