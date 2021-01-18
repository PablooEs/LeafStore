export const addItemCart = (item) =>{
    return{
        type: 'INCREMENT',
        element: item,
    };
};
