export const ADDTODO = 'ADDTODO';
export const TOGGLECOMPLETE = 'TOGGLECOMPLETE';

export const addtodo = (data) => {
    return {
        type: ADDTODO, 
        payload : data
    }
}

export const toggleComplete = (data) => {
    return {
        type: TOGGLECOMPLETE,
        payload: data
    }
}