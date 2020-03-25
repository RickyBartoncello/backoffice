export const FETCH_QUOTES_REQUESTED = 'FETCH_QUOTES_REQUESTED'; // Accion | Action
export const FETCH_QUOTES_SUCCEEDED = 'FETCH_QUOTES_SUCCEEDED'; // Accion | Action

export const fetchQuotesRequested = filter =>({type: FETCH_QUOTES_REQUESTED, filter})// Disparador o Action Creator
export const fetchQuotesSucceeded = (quotes, limit, total) => ({
    type: FETCH_QUOTES_SUCCEEDED,
    quotes, limit, total
}) // Disparador o Action Creator

export const SORT_QUOTE = 'SORT_QUOTE';
export const sortQuote = sort => ({type: SORT_QUOTE, sort});