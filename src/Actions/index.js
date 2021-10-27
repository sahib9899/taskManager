export const addTask = (data) => {
    return{
        type: 'ADD_TASK',
        payload: data
    }
}

export const updateTask = (data, update) => {
    return{
        type: 'UPDATE_TASK',
        payload:{data, update}
    }
}