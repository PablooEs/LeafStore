import {cartReducer} from './cartReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    products: cartReducer,
});

export default allReducers;