import * as actionTypes from '../constants/loginConstants';

const defaultState = false;

export const loginReducer = (state = defaultState,{type,payload})=>{
    switch(type){
        case actionTypes.LOG_IN:{
            state = true;
            return state;
        }
        case actionTypes.LOG_OUT:{
            state = false;
            return state;
        }
        default:
            return state;
    }
}