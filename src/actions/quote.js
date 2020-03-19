import constant from 'lodash/constant';

export const FETCH_QUOTES_REQUESTED = 'FETCH_QUOTES_REQUESTED'; // Accion | Action
export const FETCH_QUOTES_SUCCEEDED = 'FETCH_QUOTES_SUCCEEDED'; // Accion | Action

export const fetchQuotesRequested = constant({type: FETCH_QUOTES_REQUESTED}) // Disparador o Action Creator
export const fetchQuotesSucceeded = quotes => ({
    type: FETCH_QUOTES_SUCCEEDED,
    quotes
}) // Disparador o Action Creator