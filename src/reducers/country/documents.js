import {
    FETCH_COUNTRIES_REQUESTED,
    FETCH_COUNTRIES_SUCCEEDED,
    SORT_COUNTRY,
    SUBMIT_COUNTRY_DATA_SUCCEEDED,
    FETCH_COUNTRY_SUCCEEDED,
    UPDATE_COUNTRY_DATA
} from '../../actions/country';

import orderBy from 'lodash/orderBy'
//import edit from 'lodash/edit'

const initialState = {
    loading: false,
    countries: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_REQUESTED:
            return { ...state, loading: true };
        case FETCH_COUNTRIES_SUCCEEDED:
            const { countries, limit, total } = action;
            return { ...state, loading: false, countries, limit, total };
        case SORT_COUNTRY:
            return {
                ...state,
                loading: false,
                countries: orderBy(state.countries,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        case SUBMIT_COUNTRY_DATA_SUCCEEDED:
            return { ...state, success: true, car: {} };
        case FETCH_COUNTRY_SUCCEEDED:
            return { ...state, car: action.car }
        case UPDATE_COUNTRY_DATA:
            return { ...state, car: action.car };
        default:
            return state;
    }
}