


const counterReducer = (state = [], action) => {
    switch (action.type) {
        case 'INCREMENT':
            return [
                ...state,
                {    
                  text: action.payload,
                }
              ]
        case 'DECREMENT':
            return state -1;
        default:
            return state;        
    }
};

export default counterReducer;