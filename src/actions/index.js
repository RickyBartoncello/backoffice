import constant from 'lodash/constant';

export const ERROR_OCCURRED = 'ERROR_OCCURRED';
export const handleError = ({failed, err}) => ({
    type: ERROR_OCCURRED,
    err,
    failed
});

export const IS_MOBILE = 'IS_MOBILE';
export const setIsMobile = isMobile => ({type: IS_MOBILE, isMobile});

export const SAVING = 'SAVING';
export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';

export const savingAction = saving => ({type: SAVING, ...saving});
export const loadingAction = loading => ({type: LOADING, ...loading});
export const successAction = success => ({type: SUCCESS, ...success});

export const SET_FILTERS = 'SET_FILTERS';
export const GET_FILTERS = 'GET_FILTERS';
export const SET_STORED_FILTERS = 'SET_STORED_FILTERS';

export const setStoredFilters = filters => ({type: SET_STORED_FILTERS, filters});
export const setFilters = (filters, objectPath) => ({type: SET_FILTERS, filters, objectPath});
export const getFilters = constant({type: GET_FILTERS});
