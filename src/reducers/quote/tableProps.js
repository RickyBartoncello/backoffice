import find from 'lodash/find';
import {
    SORT_QUOTE
} from '../../actions/quote';

const initialState = {
    columns: [
        'text',
        'author',
        'createdAt',
    ],
    headers: [
        {
            id: 'text',
            label: 'Texto',
            sort: 'desc'
        },
        {
            id: 'author',
            label: 'Autor',
            sort: 'desc'
        },
        {
            id: 'createdAt',
            label: 'Creado',
            sort: 'desc'
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SORT_QUOTE:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}