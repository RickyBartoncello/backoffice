import constant from 'lodash/constant';

export const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED'; // Accion | Action
export const FETCH_CARS_SUCCEEDED = 'FETCH_CARS_SUCCEEDED'; // Accion | Action
export const SUBMIT_CAR_DATA_REQUESTED = 'SUBMIT_CAR_DATA_REQUESTED';
export const SUBMIT_CAR_DATA_SUCCEEDED = 'SUBMIT_CAR_DATA_SUCCEEDED';

export const UPDATE_CAR_DATA = 'UPDATE_CAR_DATA';

export const FETCH_CAR_REQUESTED = 'FETCH_CAR_REQUESTED'; // Accion | Action
export const FETCH_CAR_SUCCEEDED = 'FETCH_CAR_SUCCEEDED'; // Accion | Action

export const DELETE_CAR_REQUESTED = 'DELETE_CAR_REQUESTED';
export const DELETE_CAR_SUCCEEDED = 'DELETE_CAR_SUCCEEDED';

export const SORT_CAR = 'SORT_CAR';

export const fetchCarsRequested = filter => ({type: FETCH_CARS_REQUESTED, filter}) // Disparador o Action Creator
export const fetchCarsSucceeded = (cars, limit, total ) => ({
    type: FETCH_CARS_SUCCEEDED,
    cars, limit, total
}) // Disparador o Action Creator


export const submitCarDataRequested = constant({type: SUBMIT_CAR_DATA_REQUESTED});
export const submitCarDataSucceeded = constant({type: SUBMIT_CAR_DATA_SUCCEEDED});

export const updateCarData = car => ({type: UPDATE_CAR_DATA, car});

export const fetchCarRequested = id => ({type: FETCH_CAR_REQUESTED, id}) // Disparador o Action Creator
export const fetchCarSucceeded = car => ({
    type: FETCH_CAR_SUCCEEDED,
    car
}) // Disparador o Action Creator

export const deleteCarRequested = id => ({type: DELETE_CAR_REQUESTED, id});
export const deleteCarSucceeded = constant({type: DELETE_CAR_SUCCEEDED});

export const sortCar = sort => ({type: SORT_CAR, sort});
