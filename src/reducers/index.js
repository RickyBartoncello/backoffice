import {combineReducers} from 'redux';

import car from './car';
import country from './country';
import instrument from './instrument';
import movie from './movie';

export default combineReducers({
    car,
    country,
    instrument,
    movie
})