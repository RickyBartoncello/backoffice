import constant from 'lodash/constant';

export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'; // Accion | Action
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED'; // Accion | Action

export const sortCountry = sort => ({type: SORT_COUNTRY, sort});

export const fetchCountriesRequested = filter =>({type: FETCH_COUNTRIES_REQUESTED, filter})// Disparador o Action Creator
export const fetchCountriesSucceeded = (countries, limit, total) => ({
    type: FETCH_COUNTRIES_SUCCEEDED,
    countries, limit, total
}) // Disparador o Action Creator

export const SORT_COUNTRY = 'SORT_COUNTRY';

export const SUBMIT_COUNTRY_DATA_REQUESTED = 'SUBMIT_COUNTRY_DATA_REQUESTED';
export const SUBMIT_COUNTRY_DATA_SUCCEEDED = 'SUBMIT_COUNTRY_DATA_SUCCEEDED';

export const submitCountryDataRequested = constant({type: SUBMIT_COUNTRY_DATA_REQUESTED});
export const submitCountryDataSucceeded = constant({type: SUBMIT_COUNTRY_DATA_SUCCEEDED});

export const UPDATE_COUNTRY_DATA = 'UPDATE_COUNTRY_DATA';

export const updateCountryData = country => ({type: UPDATE_COUNTRY_DATA, country});

export const FETCH_COUNTRY_REQUESTED = 'FETCH_COUNTRY_REQUESTED'; // Accion | Action
export const FETCH_COUNTRY_SUCCEEDED = 'FETCH_COUNTRY_SUCCEEDED'; // Accion | Action

export const fetchCountryRequested = id => ({type: FETCH_COUNTRY_REQUESTED, id}) // Disparador o Action Creator
export const fetchCountrySucceeded = country => ({
    type: FETCH_COUNTRY_SUCCEEDED,
    country
}) // Disparador o Action Creator
