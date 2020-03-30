import {combineReducers} from 'redux';

import car from './car';
import country from './country';
import instrument from './instrument';
import quote from './quote';

export default combineReducers({
    car,
    country,
    instrument,
    quote
})