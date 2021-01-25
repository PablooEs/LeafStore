import * as actionTypes from '../constants/cartConstants';
let counter = 0;
let list = [];
let result = [];
let props = ['counter'];


const defaultState = [];
export const cartReducer = (state = defaultState, {type,payload}) =>{
    switch (type){
        case "ADD_TO_CART":{
            if(list != null){

                current = list.find(el => el.id === payload.id).foo;
                current.counter += 1;

            }else{
                current = payload;
                current.counter = 1; 
                list.push(current)
            }
            

            // const found = list.some(el => el.id === payload.id);
            // if (found){
                
            //     list.map(el =>{ el.counter += 1});
                
            // }else{
            //     list.push(payload);
            //     list.map(el =>{ el.counter = 1});
            // }
            return{
                productos: list,
                total: list.length,
            };
        }
            
        default:
            return state;
    }
};