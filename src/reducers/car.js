import {
    FETCH_CARS_SUCCEEDED,
    FETCH_CARS_REQUESTED
} from '../actions/car'

const initialState = {
    loading: false,
    cars: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARS_REQUESTED:
            return {...state, loading: true};
        case FETCH_CARS_SUCCEEDED:
            return {...state, loading: false, cars: action.cars};
        default:
            return state;
    }
}