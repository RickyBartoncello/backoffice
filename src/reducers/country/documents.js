import {
    FETCH_COUNTRIES_SUCCEEDED,
    FETCH_COUNTRIES_REQUESTED,
    SORT_COUNTRY
} from '../../actions/country';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    countries: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_REQUESTED:
            return {...state, loading: true};
        case FETCH_COUNTRIES_SUCCEEDED:
            return {...state, loading: false, countries: action.countries};
        case SORT_COUNTRY:
            return {
                ...state,
                loading: false,
                countries: orderBy(state.countries,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}