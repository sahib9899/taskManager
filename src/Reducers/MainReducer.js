export const addNewTask = (state=[], {type, payload}) => {
    switch (type) {
        case 'ADD_TASK':
            return [...state, payload];
    
        case 'UPDATE_TASK':
            const index = state.indexOf(payload.data)
            const newData = [...state];
            newData[index] = payload.update;
            return newData;
            
        default:
            return state;
    }
}