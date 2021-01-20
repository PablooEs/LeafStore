import badgeReducer from './badge';
import {cartReducer} from './cartReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    badge: badgeReducer, 
    item: cartReducer,
});

export default allReducers;