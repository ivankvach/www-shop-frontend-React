export const increment = (data) => {
    return {
        type: 'INCREMENT',
        payload: data
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};