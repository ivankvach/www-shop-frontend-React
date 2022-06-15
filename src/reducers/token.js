const tokenReducer = (state = "", action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return state = action.payload;
            default:
                return state;        
        }
    };