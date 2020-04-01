import {
    FETCH_INSTRUMENTS_REQUESTED,
    FETCH_INSTRUMENTS_SUCCEEDED,
    SORT_INSTRUMENT,
    SUBMIT_INSTRUMENT_DATA_SUCCEEDED,
    FETCH_INSTRUMENT_SUCCEEDED,
    UPDATE_INSTRUMENT_DATA
} from '../../actions/instrument';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    instruments: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INSTRUMENTS_REQUESTED:
            return { ...state, loading: true };
        case FETCH_INSTRUMENTS_SUCCEEDED:
            const { instruments, limit, total } = action;
            return { ...state, loading: false, instruments, limit, total };
        case SORT_INSTRUMENT:
            return {
                ...state,
                loading: false,
                instruments: orderBy(state.instruments,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        case SUBMIT_INSTRUMENT_DATA_SUCCEEDED:
            return { ...state, success: true, car: {} };
        case FETCH_INSTRUMENT_SUCCEEDED:
            return { ...state, car: action.car }
        case UPDATE_INSTRUMENT_DATA:
            return { ...state, car: action.car };
        default:
            return state;
    }
}