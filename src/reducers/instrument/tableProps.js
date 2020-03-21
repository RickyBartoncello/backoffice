import find from 'lodash/find';
import {
    SORT_INSTRUMENT
} from '../../actions/instrument';

const initialState = {
    columns: [
        'hexfamily',
        'family',
        'instrument',
    ],
    headers: [
        {
            id: 'hexfamily',
            label: 'Hexfamilia',
            sort: 'desc'
        },
        {
            id: 'family',
            label: 'Familia',
            sort: 'desc'
        },
        {
            id: 'instrument',
            label: 'Instrumento',
            sort: 'desc'
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SORT_INSTRUMENT:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}