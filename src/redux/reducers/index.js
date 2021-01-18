import badgeReducer from './badge';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    badge: badgeReducer, 
});

export default allReducers;