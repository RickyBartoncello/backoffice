import {
    FETCH_QUOTES_SUCCEEDED,
    FETCH_QUOTES_REQUESTED
} from '../actions/quote'

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
        default:
            return state;
    }
}