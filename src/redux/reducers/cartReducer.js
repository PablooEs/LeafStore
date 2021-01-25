import * as actionTypes from '../constants/cartConstants';
let counter = 0;
let list = [];

const defaultState = [];
export const cartReducer = (state = defaultState, {type,payload}) =>{
    switch (type){
        case "ADD_TO_CART":{

            const found = list.some(el => el.id === payload.id);
            if (found){
                counter +=1;
            }else{
                list.push(payload);
            }
            
            console.log(' Lista: ', list, 'Counter: ', counter);
            return{
                productos: list,
                counter,
                total: list.length,
            };
        }
            
        default:
            return state;
    }
};