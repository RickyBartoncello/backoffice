import constant from 'lodash/constant';

export const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED'; // Accion | Action
export const FETCH_CARS_SUCCEEDED = 'FETCH_CARS_SUCCEEDED'; // Accion | Action

export const SORT_CAR = 'SORT_CAR';

export const fetchCarsRequested = filter => ({type: FETCH_CARS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchCarsSucceeded = (cars, limit, total ) => ({
    type: FETCH_CARS_SUCCEEDED,
    cars, limit, total
}) // Disparador o Action Creator

export const sortCar = sort => ({type: SORT_CAR, sort});

export const SUBMIT_CAR_DATA_REQUESTED = 'SUBMIT_CAR_DATA_REQUESTED';
export const SUBMIT_CAR_DATA_SUCCEEDED = 'SUBMIT_CAR_DATA_SUCCEEDED';

export const submitCarDataRequested = constant({type: SUBMIT_CAR_DATA_REQUESTED});
export const submitCarDataSucceeded = constant({type: SUBMIT_CAR_DATA_SUCCEEDED});

export const UPDATE_CAR_DATA = 'UPDATE_CAR_DATA';

export const updateCarData = cart => ({type: UPDATE_CAR_DATA, cart});