import constant from 'lodash/constant';

export const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED'; // Accion | Action
export const FETCH_CARS_SUCCEEDED = 'FETCH_CARS_SUCCEEDED'; // Accion | Action

export const fetchCarsRequested = constant({type: FETCH_CARS_REQUESTED}) // Disparador o Action Creator
export const fetchCarsSucceeded = cars => ({
    type: FETCH_CARS_SUCCEEDED,
    cars
}) // Disparador o Action Creator

export const SORT_CAR = 'SORT_CAR';
export const sortCar = sort => ({type: SORT_CAR, sort});