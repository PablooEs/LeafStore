import {cartReducer} from './cartReducer'
import {loginReducer} from './loginReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    products: cartReducer,
    login: loginReducer,
});

export default allReducers;