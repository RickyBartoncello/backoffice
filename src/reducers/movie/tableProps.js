import find from 'lodash/find';
import {
    SORT_MOVIE
} from '../../actions/movie';

const initialState = {
    columns: [
        'title',
        'genres',
        'year',
        'actions'
    ],
    headers: [
        {
            id: 'title',
            label: 'Titulo',
            sort: 'desc'
        },
        {
            id: 'genres',
            label: 'Genero',
            sort: 'desc'
        },
        {
            id: 'year',
            label: 'Ano',
            sort: 'desc'
        },
        {
            id: 'actions',
            label: 'Acciones'
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SORT_MOVIE:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}