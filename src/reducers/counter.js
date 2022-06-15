
const counterReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_BASKET':
            return [
                ...state,
                {    
                  text: action.payload,
                }
              ]
        case 'INITIAL_STATE_FROM_SERVER':
            return state = action.payload;

        case 'DELETE_ITEM_FROM_BASKET':
      return [
          ...state.filter((card) => card._id !== action.payload)
            ]
        default:
            return state;        
    }
};

export default counterReducer;