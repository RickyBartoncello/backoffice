import {
    FETCH_INSTRUMENTS_SUCCEEDED,
    FETCH_INSTRUMENTS_REQUESTED,
    SORT_INSTRUMENT
} from '../../actions/instrument';

import orderBy from 'lodash/orderBy'

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
        case SORT_INSTRUMENT:
            return {
                ...state,
                loading: false,
                instruments: orderBy(state.instruments,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}