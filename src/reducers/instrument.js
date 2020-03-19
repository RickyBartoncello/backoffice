import {
    FETCH_INSTRUMENTS_SUCCEEDED,
    FETCH_INSTRUMENTS_REQUESTED
} from '../actions/instrument'

const initialState = {
    loading: false,
    instruments: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_INSTRUMENTS_REQUESTED:
            return {...state, loading: true};
        case FETCH_INSTRUMENTS_SUCCEEDED:
            return {...state, loading: false, instruments: action.instruments};
        default:
            return state;
    }
}