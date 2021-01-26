import * as actionTypes from '../constants/cartConstants';

let list = [];
let current = {};
let props = ['counter'];
const defaultState = [];

export const cartReducer = (state = defaultState, {type,payload}) =>{
    switch (type){
        case actionTypes.ADD_TO_CART:{
            const found = list.some(el => el.id === payload.id);

            if(list.length != 0 && found){

                current = list.find(el => el.id === payload.id);
                current.counter += 1;

            }else{
                current = payload;
                current.counter = 1; 
                list.push(current)
            }

            return{
                productos: list,
                total: list.length,
            };
        }
        case actionTypes.REMOVE_FROM_CART:{
            list = list.filter(el => el.id != payload); 
            return{
                productos: list,
                total: list.length,
            };
        }
        default:
            return state;
    }
};