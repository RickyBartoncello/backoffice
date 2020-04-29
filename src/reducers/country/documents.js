import {
    FETCH_COUNTRIES_REQUESTED,
    FETCH_COUNTRIES_SUCCEEDED,
    SORT_COUNTRY,
    SUBMIT_COUNTRY_DATA_SUCCEEDED,
    FETCH_COUNTRY_SUCCEEDED,
    UPDATE_COUNTRY_DATA,
    DELETE_COUNTRY_REQUESTED,
    DELETE_COUNTRY_SUCCEEDED
} from '../../actions/country';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    countries: [],
    country: {}
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
            return { ...state, success: true, country: {} };
        case FETCH_COUNTRY_SUCCEEDED:
            return { ...state, country: action.country };
        case UPDATE_COUNTRY_DATA:
            return { ...state, country: action.country };
        case DELETE_COUNTRY_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case DELETE_COUNTRY_SUCCEEDED:
            return {
                ...state,
                loading: false,
                country: action.country
            };
        default:
            return state;
    }
}