import * as actionTypes from '../constants/cartConstants';

export function addItemCart (item){
    return{
        type: actionTypes.ADD_TO_CART,
        payload: item,
    };
};

export function removeItemCart (id){
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    };
};
