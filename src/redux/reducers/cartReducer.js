const defaultState = [];

const cartReducer = (state = defaultState,action) =>{
    switch (action.type){
        case 'INCREMENT':
            return [...state, action.element];
        default:
            return state;
    }
};

export default cartReducer;