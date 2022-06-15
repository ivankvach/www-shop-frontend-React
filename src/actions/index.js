export const increment = (data) => {
    return {
        type: 'ADD_ITEM_TO_BASKET',
        payload: data
    };
};

export const decrement = (data) => {
    return {
        type: 'INITIAL_STATE_FROM_SERVER',
        payload: data
    };
};

export const deleteItems = (data) => {
    return {
        type: 'DELETE_ITEM_FROM_BASKET',
        payload: data
    };
};

 export const addToken = (data) => {
        return {
            type: 'ADD_TOKEN',
            payload: data
        };
};