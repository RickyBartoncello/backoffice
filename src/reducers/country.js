import {
    FETCH_COUNTRIES_SUCCEEDED,
    FETCH_COUNTRIES_REQUESTED
} from '../actions/country'

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
        default:
            return state;
    }
}