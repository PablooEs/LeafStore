const defaultState = 0;

const badgeReducer = (state = defaultState,action) =>{
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
};

export default badgeReducer;