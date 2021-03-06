import {
    FETCH_CARS_REQUESTED,
    FETCH_CARS_SUCCEEDED,
    SORT_CAR,
<<<<<<< HEAD
    SUBMIT_CAR_DATA_SUCCEEDED,
    FETCH_CAR_SUCCEEDED
} from '../../actions/car';
    
import orderBy from 'lodash/orderBy'
    
const initialState = {
    loading: false,
    cars: [],
    car: {}
};
    
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CARS_REQUESTED:
            return {...state, loading: true};
        case FETCH_CARS_SUCCEEDED:
            const {cars, limit, total} = action;
            return {...state, loading: false, cars, limit, total};
        case SORT_CAR:
            return {
                ...state,
                loading: false,
                cars: orderBy(state.cars,
                [action.sort.id],
                [action.sort.sort]
            )
            };
        case SUBMIT_CAR_DATA_SUCCEEDED:
            return {...state, success: true, car: {}};
        case FETCH_CAR_SUCCEEDED:
            return {...state, car: action.car}
        default:
            return state;
=======
    SUBMIT_CAR_DATA_SUCCEEDED
    } from '../../actions/car';
    
    import orderBy from 'lodash/orderBy'
    
    const initialState = {
    loading: false,
    cars: [],
    car: {}
    };
    
    export default (state = initialState, action) => {
    switch(action.type) {
    case FETCH_CARS_REQUESTED:
    return {...state, loading: true};
    case FETCH_CARS_SUCCEEDED:
    const {cars, limit, total} = action;
    return {...state, loading: false, cars, limit, total};
    case SORT_CAR:
    return {
    ...state,
    loading: false,
    cars: orderBy(state.cars,
    [action.sort.id],
    [action.sort.sort]
    )
    };
    case SUBMIT_CAR_DATA_SUCCEEDED:
    return {...state, success: true, car: {}};
    default:
    return state;
>>>>>>> 01dc7665da9634571f1432fcf697ecf4fa836648
    }
    }