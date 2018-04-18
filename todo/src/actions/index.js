export const ADDTODO = 'ADDTODO';


export const addtodo = (data) => {
    return {
        type: ADDTODO, 
        payload : data
    }
}