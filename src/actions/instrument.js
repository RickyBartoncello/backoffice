import constant from 'lodash/constant';

export const FETCH_INSTRUMENTS_REQUESTED = 'FETCH_INSTRUMENTS_REQUESTED'; // Accion | Action
export const FETCH_INSTRUMENTS_SUCCEEDED = 'FETCH_INSTRUMENTS_SUCCEEDED'; // Accion | Action

export const fetchInstrumentsRequested = constant({type: FETCH_INSTRUMENTS_REQUESTED}) // Disparador o Action Creator
export const fetchInstrumentsSucceeded = instruments => ({
    type: FETCH_INSTRUMENTS_SUCCEEDED,
    instruments
}) // Disparador o Action Creator

export const SORT_INSTRUMENT = 'SORT_INSTRUMENT';
export const sortInstrument = sort => ({type: SORT_INSTRUMENT, sort});