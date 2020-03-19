import constant from 'lodash/constant';

export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'; // Accion | Action
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED'; // Accion | Action

export const fetchCountriesRequested = constant({type: FETCH_COUNTRIES_REQUESTED}) // Disparador o Action Creator
export const fetchCountriesSucceeded = countries => ({
    type: FETCH_COUNTRIES_SUCCEEDED,
    countries
}) // Disparador o Action Creator