import * as actionTypes from '../constants/cartConstants';

export const addItemCart = (item) =>{
    return{
        type: actionTypes,
        element: item,
    };
};
