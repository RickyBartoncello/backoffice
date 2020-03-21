import find from 'lodash/find';
import {
    SORT_CAR
} from '../../actions/car';

const initialState = {
    columns: [
        'brand',
        'model',
        'year',
    ],
    headers: [
        {
            id: 'brand',
            label: 'Marca',
            sort: 'desc'
        },
        {
            id: 'model',
            label: 'Moelo',
            sort: 'desc'
        },
        {
            id: 'year',
            label: 'Ano',
            sort: 'desc'
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SORT_CAR:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}